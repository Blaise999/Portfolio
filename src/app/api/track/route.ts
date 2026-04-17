import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'visits.json');

// Load visits (or start empty)
let visits: any[] = [];
if (fs.existsSync(DATA_FILE)) {
  visits = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
}

export async function POST(req: NextRequest) {
  // Get real IP (works on Vercel, localhost, etc.)
  let ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'Unknown';
  if (ip.includes(',')) ip = ip.split(',')[0].trim();

  try {
    // Free geo lookup
    const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
    const geo = await geoRes.json();

    const visit = {
      ip,
      city: geo.city || '—',
      country: geo.country_name || 'Unknown',
      timestamp: new Date().toISOString(),
    };

    visits.unshift(visit); // newest first

    // Keep only last 500 visits
    if (visits.length > 500) visits.pop();

    fs.writeFileSync(DATA_FILE, JSON.stringify(visits, null, 2));
  } catch (err) {
    // Still save the IP even if geo fails
    visits.unshift({
      ip,
      city: '—',
      country: 'Unknown',
      timestamp: new Date().toISOString(),
    });
    if (visits.length > 500) visits.pop();
    fs.writeFileSync(DATA_FILE, JSON.stringify(visits, null, 2));
  }

  return NextResponse.json({ success: true });
}

// Optional: allow GET for testing
export async function GET() {
  return NextResponse.json(visits);
}