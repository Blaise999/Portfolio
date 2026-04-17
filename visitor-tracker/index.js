const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'visits.json');

// Load existing visits
let visits = [];
if (fs.existsSync(DATA_FILE)) {
    visits = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
}

app.use(cors());                    // ← Allows your website to call this tracker
app.use(express.json());

// === TRACK VISITOR (just call this from your website) ===
app.post('/track', async (req, res) => {
    let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    if (ip && ip.includes(',')) ip = ip.split(',')[0].trim(); // handle proxies

    try {
        const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
        const geo = await geoRes.json();

        const visit = {
            ip: ip || 'Unknown',
            city: geo.city || '—',
            country: geo.country_name || 'Unknown',
            timestamp: new Date().toISOString()
        };

        visits.unshift(visit); // newest on top

        // Keep only last 500 visits
        if (visits.length > 500) visits.pop();

        fs.writeFileSync(DATA_FILE, JSON.stringify(visits, null, 2));
    } catch (err) {
        console.log('Geo lookup failed (still saving IP)');
        visits.unshift({
            ip: ip || 'Unknown',
            city: '—',
            country: 'Unknown',
            timestamp: new Date().toISOString()
        });
        if (visits.length > 500) visits.pop();
        fs.writeFileSync(DATA_FILE, JSON.stringify(visits, null, 2));
    }

    res.json({ success: true });
});

// === DASHBOARD ===
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'dashboard.html'));
});

// === API for dashboard ===
app.get('/api/visits', (req, res) => {
    res.json(visits);
});

app.listen(PORT, () => {
    console.log(`
    🚀 Visitor Tracker running!
    → Test it: http://localhost:${PORT}/test
    → Live dashboard: http://localhost:${PORT}/dashboard
    `);
});