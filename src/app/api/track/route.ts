import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'visits.json');

// Load visits
let visits = [];
if (fs.existsSync(DATA_FILE)) {
  visits = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
}

export async function POST(req: NextRequest) {
  // === BETTER IP DETECTION ===
  let ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    '127.0.0.1';

  console.log('📍 Incoming visit - Raw IP:', ip);

  let visit;

  // === LOCALHOST DETECTION (this was your main problem) ===
  if (ip === '127.0.0.1' || ip === '::1' || ip.startsWith('192.168.') || ip.startsWith('10.')) {
    console.log('🧪 Local development IP detected → using fake location for testing');
    visit = {
      ip: '127.0.0.1 (Local)',
      city: 'Local Development',
      country: 'TEST',
      timestamp: new Date().toISOString(),
    };
  } else {
    try {
      const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
      const geo = await geoRes.json();

      console.log('🌍 ipapi.co response:', geo); // ← you can see this in terminal

      visit = {
        ip,
        city: geo.city || '—',
        country: geo.country_name || 'Unknown',
        timestamp: new Date().toISOString(),
      };
    } catch (err) {
      console.error('❌ Geo lookup failed:', err.message);
      visit = {
        ip,
        city: '—',
        country: 'Unknown',
        timestamp: new Date().toISOString(),
      };
    }
  }

  // Add to top of list
  visits.unshift(visit);

  // Keep only last 500 visits
  if (visits.length > 500) visits.pop();

  fs.writeFileSync(DATA_FILE, JSON.stringify(visits, null, 2));

  return NextResponse.json({ success: true });
}

// For testing in browser
export async function GET() {
  return NextResponse.json(visits);
}