'use client';

import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [visits, setVisits] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchVisits = async () => {
    const res = await fetch('/api/track');
    const data = await res.json();
    setVisits(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchVisits();
    const interval = setInterval(fetchVisits, 8000); // auto-refresh every 8 seconds
    return () => clearInterval(interval);
  }, []);

  const total = visits.length;
  const latest = visits[0]
    ? new Date(visits[0].timestamp).toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      })
    : '—';

  const countries = new Set(visits.map((v) => v.country).filter(Boolean)).size;

  const getFlag = (country) => {
    if (!country) return '🌍';
    const codePoints = country
      .toUpperCase()
      .split('')
      .map((char) => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-emerald-500 rounded-2xl flex items-center justify-center text-2xl">📍</div>
            <h1 className="text-4xl font-semibold tracking-tight">Visitor Tracker</h1>
          </div>
          <button
            onClick={fetchVisits}
            className="flex items-center gap-2 px-6 py-3 bg-zinc-900 hover:bg-zinc-800 rounded-3xl text-emerald-400 transition-colors"
          >
            <span className="text-xl">↻</span>
            <span className="font-medium">Refresh</span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-10">
          <div className="bg-zinc-900 rounded-3xl p-6">
            <p className="text-zinc-400 text-sm">Total Visitors</p>
            <p className="text-5xl font-semibold mt-2">{total}</p>
          </div>
          <div className="bg-zinc-900 rounded-3xl p-6">
            <p className="text-zinc-400 text-sm">Latest Visit</p>
            <p className="text-5xl font-semibold mt-2">{latest}</p>
          </div>
          <div className="bg-zinc-900 rounded-3xl p-6">
            <p className="text-zinc-400 text-sm">Unique Countries</p>
            <p className="text-5xl font-semibold mt-2">{countries}</p>
          </div>
        </div>

        {/* Live Table */}
        <div className="bg-zinc-900 rounded-3xl overflow-hidden">
          <div className="px-8 py-6 border-b border-zinc-800 flex justify-between items-center">
            <h2 className="text-xl font-semibold">Live Visitor Log</h2>
            <div className="flex items-center gap-2 text-emerald-400">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              LIVE
            </div>
          </div>

          <table className="w-full">
            <thead>
              <tr className="text-left text-zinc-400 text-sm border-b border-zinc-800">
                <th className="px-8 py-5">IP ADDRESS</th>
                <th className="px-8 py-5">TIME</th>
                <th className="px-8 py-5">LOCATION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800 text-zinc-300">
              {visits.map((visit, i) => {
                const time = new Date(visit.timestamp).toLocaleString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  hour: 'numeric',
                  minute: '2-digit',
                  hour12: true,
                });
                return (
                  <tr key={i} className="hover:bg-zinc-800/50 transition-colors">
                    <td className="px-8 py-5 font-mono text-sm">{visit.ip}</td>
                    <td className="px-8 py-5 text-sm">{time}</td>
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{getFlag(visit.country)}</span>
                        <span>
                          {visit.city}, {visit.country}
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
              {visits.length === 0 && (
                <tr>
                  <td colSpan={3} className="px-8 py-16 text-center text-zinc-500">
                    No visitors yet • Refresh your website to test
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <p className="text-center text-zinc-500 text-xs mt-8">
          Built into your Next.js app • Data saved in visits.json
        </p>
      </div>
    </div>
  );
}