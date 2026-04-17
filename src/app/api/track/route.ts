import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'visits.json');

let visits = [];
if (fs.existsSync(DATA_FILE)) {
  visits = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
}

export async function POST(req: NextRequest) {
  let ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    '127.0.0.1';

  console.log('📍 Incoming visit - IP:', ip);

  let visit;

  if (ip === '127.0.0.1' || ip === '::1' || ip.startsWith('192.168.') || ip.startsWith('10.')) {
    visit = {
      ip: '127.0.0.1 (Local)',
      city: 'Local Development',
      country: 'TEST',
      countryCode: 'XX',
      timestamp: new Date().toISOString(),
    };
  } else {
    try {
      const geoRes = await fetch(`http://ip-api.com/json/${ip}`);
      const geo = await geoRes.json();

      console.log('🌍 Geo response:', geo);

      visit = {
        ip,
        city: geo.city || '—',
        country: geo.country || 'Unknown',
        countryCode: geo.countryCode || 'XX',
        timestamp: new Date().toISOString(),
      };
    } catch (err) {
      console.error('❌ Geo lookup failed:', err.message);
      visit = {
        ip,
        city: '—',
        country: 'Unknown',
        countryCode: 'XX',
        timestamp: new Date().toISOString(),
      };
    }
  }

  visits.unshift(visit);
  if (visits.length > 500) visits.pop();

  fs.writeFileSync(DATA_FILE, JSON.stringify(visits, null, 2));

  return NextResponse.json({ success: true });
}

export async function GET() {
  return NextResponse.json(visits);
}