import React, { useState } from 'react';
import { Compass, Sparkles, Star, Calendar, MapPin, Eye, Info } from 'lucide-react';

export default function SriLankaConstellations() {
  const [activeSeason, setActiveSeason] = useState('all');
  const [selectedConstellation, setSelectedConstellation] = useState(0);

  const constellationList = [
    {
      id: 'orion',
      sinhalaName: 'Mriga',
      englishName: 'Orion / The Celestial Hunter',
      categoryTag: 'ORION',
      season: 'dry',
      viewingPeriod: 'November to April (Peak: Jan–Feb)',
      direction: 'East rising at dusk, passes through high Zenith',
      brightness: 'Extremely High (Betelgeuse & Rigel)',
      lore: 'In ancient Sri Lanka, the three belt stars rising in the eastern sky at dusk signaled the start of the traditional Maha harvest season. Farmers calibrated irrigation reservoir sluice gates based on its zenith alignment.',
      starsCount: 8,
      diagram: (
        <svg viewBox="0 0 240 180" style={{ width: '100%', height: '140px' }}>
          <line x1="60" y1="40" x2="110" y2="90" stroke="var(--accent-gold)" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="180" y1="35" x2="130" y2="90" stroke="var(--accent-gold)" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="110" y1="90" x2="120" y2="90" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="120" y1="90" x2="130" y2="90" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="110" y1="90" x2="70" y2="150" stroke="var(--accent-gold)" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="130" y1="90" x2="170" y2="145" stroke="var(--accent-gold)" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="60" cy="40" r="6" fill="var(--accent-gold)" filter="drop-shadow(0 0 8px var(--accent-gold))" />
          <circle cx="180" cy="35" r="5" fill="#5BE0E5" />
          <circle cx="110" cy="90" r="4.5" fill="#FFFFFF" />
          <circle cx="120" cy="90" r="4.5" fill="var(--accent-gold)" />
          <circle cx="130" cy="90" r="4.5" fill="#FFFFFF" />
          <circle cx="70" cy="150" r="4.5" fill="#5BE0E5" />
          <circle cx="170" cy="145" r="7" fill="#FFFFFF" filter="drop-shadow(0 0 8px #FFFFFF)" />
        </svg>
      )
    },
    {
      id: 'ursa-major',
      sinhalaName: 'Saptarshi',
      englishName: 'Ursa Major / The Great Bear',
      categoryTag: 'URSA MAJOR',
      season: 'dry',
      viewingPeriod: 'March to July (Clear in northern skies)',
      direction: 'Northern Horizon (15° to 35° Altitude)',
      brightness: 'High (Pointers: Dubhe & Merak)',
      lore: 'Because Sri Lanka is positioned around 6°–9° North latitude, the Seven Sages appear gracefully above the northern horizon. Ancient maritime voyagers and Jaffna peninsula fishermen used it to calibrate true north bearings.',
      starsCount: 7,
      diagram: (
        <svg viewBox="0 0 240 180" style={{ width: '100%', height: '140px' }}>
          <line x1="40" y1="60" x2="80" y2="65" stroke="var(--accent-gold)" strokeWidth="1.5" />
          <line x1="80" y1="65" x2="110" y2="90" stroke="var(--accent-gold)" strokeWidth="1.5" />
          <line x1="110" y1="90" x2="150" y2="95" stroke="var(--accent-gold)" strokeWidth="1.5" />
          <line x1="150" y1="95" x2="190" y2="75" stroke="var(--accent-gold)" strokeWidth="1.5" />
          <line x1="190" y1="75" x2="195" y2="125" stroke="var(--accent-gold)" strokeWidth="1.5" />
          <line x1="195" y1="125" x2="155" y2="120" stroke="var(--accent-gold)" strokeWidth="1.5" />
          <line x1="155" y1="120" x2="150" y2="95" stroke="var(--accent-gold)" strokeWidth="1.5" />
          <circle cx="40" cy="60" r="5" fill="#FFFFFF" />
          <circle cx="80" cy="65" r="4.5" fill="#5BE0E5" />
          <circle cx="110" cy="90" r="5" fill="#FFFFFF" />
          <circle cx="150" cy="95" r="5" fill="var(--accent-gold)" />
          <circle cx="190" cy="75" r="6" fill="var(--accent-gold)" filter="drop-shadow(0 0 8px var(--accent-gold))" />
          <circle cx="195" cy="125" r="5.5" fill="#FFFFFF" />
          <circle cx="155" cy="120" r="5" fill="#5BE0E5" />
        </svg>
      )
    },
    {
      id: 'scorpius',
      sinhalaName: 'Vrishchika',
      englishName: 'Scorpius / The Celestial Scorpion',
      categoryTag: 'SCORPIUS',
      season: 'monsoon',
      viewingPeriod: 'May to August (Southwest Monsoon nights)',
      direction: 'South to South-East Horizon',
      brightness: 'Brilliant Red (Antares Heart)',
      lore: 'Featuring the reddish supergiant Antares (Heart of the Scorpion), Scorpius sweeps high across the southern sky during the mid-year monsoon. Ancient folklore linked its appearance to the changing tropical trade winds.',
      starsCount: 8,
      diagram: (
        <svg viewBox="0 0 240 180" style={{ width: '100%', height: '140px' }}>
          <line x1="50" y1="50" x2="80" y2="65" stroke="var(--accent-gold)" strokeWidth="1.5" />
          <line x1="80" y1="65" x2="110" y2="90" stroke="var(--accent-gold)" strokeWidth="1.5" />
          <line x1="110" y1="90" x2="135" y2="120" stroke="var(--accent-gold)" strokeWidth="1.5" />
          <line x1="135" y1="120" x2="170" y2="140" stroke="var(--accent-gold)" strokeWidth="1.5" />
          <line x1="170" y1="140" x2="200" y2="120" stroke="var(--accent-gold)" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="4.5" fill="#5BE0E5" />
          <circle cx="80" cy="65" r="4.5" fill="#FFFFFF" />
          <circle cx="110" cy="90" r="7.5" fill="var(--accent-gold)" filter="drop-shadow(0 0 10px var(--accent-gold))" />
          <circle cx="135" cy="120" r="5" fill="#FFFFFF" />
          <circle cx="170" cy="140" r="5" fill="#5BE0E5" />
          <circle cx="200" cy="120" r="6" fill="var(--accent-gold)" />
        </svg>
      )
    },
    {
      id: 'crux',
      sinhalaName: 'Trishanku',
      englishName: 'Crux / The Southern Cross',
      categoryTag: 'SOUTHERN CROSS',
      season: 'southern',
      viewingPeriod: 'March to June (Clear from Southern Coast)',
      direction: 'Low Southern Horizon (Galle, Matara, Hambantota)',
      brightness: 'High (Acrux & Mimosa)',
      lore: 'Because of Sri Lanka’s proximity to the equator, observers along the southern coastline enjoy clear views of this iconic southern hemisphere constellation. Historical spice traders rounding Dondra Head steered by its axis.',
      starsCount: 4,
      diagram: (
        <svg viewBox="0 0 240 180" style={{ width: '100%', height: '140px' }}>
          <line x1="120" y1="30" x2="120" y2="145" stroke="var(--accent-gold)" strokeWidth="2" />
          <line x1="80" y1="85" x2="160" y2="85" stroke="var(--accent-gold)" strokeWidth="2" />
          <circle cx="120" cy="30" r="6" fill="var(--accent-gold)" filter="drop-shadow(0 0 8px var(--accent-gold))" />
          <circle cx="120" cy="145" r="7" fill="#FFFFFF" filter="drop-shadow(0 0 8px #FFFFFF)" />
          <circle cx="80" cy="85" r="5.5" fill="#5BE0E5" />
          <circle cx="160" cy="85" r="5.5" fill="#FFFFFF" />
        </svg>
      )
    },
    {
      id: 'pleiades',
      sinhalaName: 'Krittika',
      englishName: 'Pleiades / The Seven Sisters',
      categoryTag: 'PLEIADES',
      season: 'dry',
      viewingPeriod: 'October to March (Overhead in Dec/Jan)',
      direction: 'East-North-East, traverses zenith',
      brightness: 'Distinct Open Cluster',
      lore: 'The helical rising and setting of Krittika marks pivotal points in the traditional Sri Lankan astronomical solar calendar, heralding preparation for agricultural transitions and seasonal harvest celebrations.',
      starsCount: 7,
      diagram: (
        <svg viewBox="0 0 240 180" style={{ width: '100%', height: '140px' }}>
          <circle cx="95" cy="80" r="5" fill="#5BE0E5" />
          <circle cx="115" cy="70" r="5" fill="#FFFFFF" />
          <circle cx="135" cy="85" r="6" fill="var(--accent-gold)" filter="drop-shadow(0 0 8px var(--accent-gold))" />
          <circle cx="150" cy="75" r="4.5" fill="#FFFFFF" />
          <circle cx="165" cy="88" r="5" fill="#5BE0E5" />
          <circle cx="125" cy="100" r="4.5" fill="#FFFFFF" />
          <line x1="95" y1="80" x2="115" y2="70" stroke="var(--accent-gold)" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="115" y1="70" x2="135" y2="85" stroke="var(--accent-gold)" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="135" y1="85" x2="150" y2="75" stroke="var(--accent-gold)" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="150" y1="75" x2="165" y2="88" stroke="var(--accent-gold)" strokeWidth="1" strokeDasharray="2 2" />
        </svg>
      )
    },
    {
      id: 'leo',
      sinhalaName: 'Simha',
      englishName: 'Leo / The Royal Lion',
      categoryTag: 'LEO',
      season: 'monsoon',
      viewingPeriod: 'February to June (High altitude)',
      direction: 'Traverses overhead at 75° elevation',
      brightness: 'Royal Star Regulus',
      lore: 'Holding deep cultural resonance with ancient royal history, Leo’s distinctive "Sickle" asterism is crowned by brilliant blue-white Regulus, which ancient royal astronomers tracked closely.',
      starsCount: 6,
      diagram: (
        <svg viewBox="0 0 240 180" style={{ width: '100%', height: '140px' }}>
          <path d="M 60 120 L 100 120 L 130 90 L 170 90 L 185 60 L 165 40 L 145 55 L 140 85" stroke="var(--accent-gold)" strokeWidth="1.5" fill="none" />
          <circle cx="100" cy="120" r="7" fill="var(--accent-gold)" filter="drop-shadow(0 0 10px var(--accent-gold))" />
          <circle cx="60" cy="120" r="5" fill="#FFFFFF" />
          <circle cx="130" cy="90" r="5" fill="#5BE0E5" />
          <circle cx="170" cy="90" r="5" fill="#FFFFFF" />
          <circle cx="185" cy="60" r="5" fill="#5BE0E5" />
          <circle cx="145" cy="55" r="5.5" fill="#FFFFFF" />
        </svg>
      )
    },
    {
      id: 'sirius',
      sinhalaName: 'Lubdaka',
      englishName: 'Sirius / Canis Major',
      categoryTag: 'CANIS MAJOR',
      season: 'dry',
      viewingPeriod: 'December to April (Blazing brightness)',
      direction: 'South of Orion at 45° to 65° elevation',
      brightness: 'Magnitude -1.46 (Diamond Starlight)',
      lore: 'Referred to in classical astronomy chronicles as Lubdaka, this diamond-like star flickers vigorously with prismatic colors through the tropical atmosphere, serving as a prominent focal point for nighttime skywatchers.',
      starsCount: 5,
      diagram: (
        <svg viewBox="0 0 240 180" style={{ width: '100%', height: '140px' }}>
          <circle cx="120" cy="90" r="10" fill="#FFFFFF" filter="drop-shadow(0 0 14px var(--accent-gold))" />
          <circle cx="120" cy="90" r="4" fill="var(--accent-gold)" />
          <line x1="60" y1="50" x2="120" y2="90" stroke="var(--accent-gold)" strokeWidth="1.5" strokeDasharray="3 3" />
          <line x1="120" y1="90" x2="180" y2="130" stroke="var(--accent-gold)" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="60" cy="50" r="4.5" fill="#5BE0E5" />
          <circle cx="180" cy="130" r="4.5" fill="#FFFFFF" />
        </svg>
      )
    }
  ];

  const filteredList = constellationList.filter((c) => {
    if (activeSeason === 'all') return true;
    return c.season === activeSeason;
  });

  const selected = constellationList[selectedConstellation] || constellationList[0];

  return (
    <section className="section-wrapper" id="sri-lanka-skies">
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '1040px', margin: '0 auto', textAlign: 'center' }}>

          <h2 className="section-heading">
            Sri Lanka’s Night Sky &amp; <span className="text-gradient-gold">Visible Constellations.</span>
          </h2>
          <p style={{ margin: '1rem auto 0', maxWidth: '760px', fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
            Because Sri Lanka sits near the equator at <strong>6°–9° North latitude</strong>, observers enjoy an extraordinary celestial privilege: both Northern and Southern hemispheric constellations are visible with pristine clarity across historical seasons.
          </p>

          {/* Season Filter Bar — Balanced Responsive Layout */}
          <div className="constellation-season-filter">
            <button
              className={`season-filter-btn ${activeSeason === 'all' ? 'active' : ''}`}
              onClick={() => setActiveSeason('all')}
            >
              All Visible Patterns ({constellationList.length})
            </button>
            <button
              className={`season-filter-btn ${activeSeason === 'dry' ? 'active' : ''}`}
              onClick={() => setActiveSeason('dry')}
            >
              Northeast Monsoon (Nov – Apr)
            </button>
            <button
              className={`season-filter-btn ${activeSeason === 'monsoon' ? 'active' : ''}`}
              onClick={() => setActiveSeason('monsoon')}
            >
              Southwest Monsoon (May – Oct)
            </button>
            <button
              className={`season-filter-btn ${activeSeason === 'southern' ? 'active' : ''}`}
              onClick={() => setActiveSeason('southern')}
            >
              Southern Horizon Guides
            </button>
          </div>
        </div>

        {/* Constellations Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '1.75rem', marginTop: '3.5rem' }}>
          {filteredList.map((item) => {
            const isSelected = selected.id === item.id;
            return (
              <div
                key={item.id}
                className="glass-panel"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: isSelected ? '1px solid var(--accent-gold)' : '1px solid var(--border-subtle)',
                  background: isSelected ? 'var(--bg-surface-elevated)' : 'var(--bg-surface)',
                  cursor: 'pointer',
                  position: 'relative'
                }}
                onClick={() => setSelectedConstellation(constellationList.findIndex(c => c.id === item.id))}
              >
                {/* Card Top: Diagram & Tag with Perfect Alignment */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', minHeight: '30px', marginBottom: '1rem', gap: '8px' }}>
                    <span style={{ fontSize: '0.72rem', color: 'var(--accent-gold)', fontWeight: 700, letterSpacing: '0.08em', background: 'var(--bg-glass)', padding: '4px 10px', borderRadius: '14px', border: '1px solid var(--border-subtle)', whiteSpace: 'nowrap' }}>
                      {item.categoryTag}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                      {item.starsCount} Major Stars
                    </span>
                  </div>

                  {/* Constellation Diagram Viewport */}
                  <div style={{ background: 'var(--bg-primary)', borderRadius: '10px', padding: '0.75rem', border: '1px solid var(--border-subtle)', marginBottom: '1.25rem' }}>
                    {item.diagram}
                  </div>

                  <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '3px', fontWeight: 700 }}>
                    {item.sinhalaName}
                  </h3>
                  <div style={{ fontSize: '0.84rem', color: 'var(--accent-gold-light)', marginBottom: '0.85rem', fontWeight: 600 }}>
                    {item.englishName}
                  </div>

                  <p style={{
                    fontSize: '0.92rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                    marginBottom: '1.25rem',
                    textAlign: 'left',
                    textWrap: 'pretty'
                  }}>
                    {item.lore}
                  </p>
                </div>

                {/* Card Bottom: Metadata Badges */}
                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.8rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)' }}>
                    <Calendar size={14} color="var(--accent-gold)" />
                    <span><strong>Best Seen:</strong> {item.viewingPeriod}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}>
                    <MapPin size={14} color="var(--accent-blue-light)" />
                    <span><strong>Direction:</strong> {item.direction}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Equatorial Stargazing Context Banner */}
        <div
          className="glass-panel"
          style={{
            marginTop: '3.5rem',
            padding: 'clamp(1.25rem, 3vw, 2.5rem)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            border: '1px solid var(--accent-gold-glow)',
            background: 'linear-gradient(135deg, var(--bg-surface) 0%, var(--bg-surface-elevated) 100%)'
          }}
        >
          <div style={{ maxWidth: '780px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-gold)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '6px' }}>
              <Compass size={18} />
              <span>THE SRI LANKAN CELESTIAL ADVANTAGE</span>
            </div>
            <h4 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '6px' }}>
              Why Sri Lanka is One of the World’s Greatest Celestial Viewing Nodes
            </h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', margin: 0, textAlign: 'left', textWrap: 'pretty' }}>
              At latitude 7° North, celestial objects cross directly through the zenith rather than hugging low horizons. On clear nights in places like Sigiriya, Horton Plains, and Anuradhapura, stargazers can view 85 of the 88 modern constellations over an annual cycle.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <span style={{ padding: '8px 16px', borderRadius: '8px', background: 'var(--bg-glass)', border: '1px solid var(--border-subtle)', color: 'var(--accent-gold)', fontSize: '0.82rem', fontWeight: 700 }}>
              LAT 6°–9° NORTH
            </span>
            <span style={{ padding: '8px 16px', borderRadius: '8px', background: 'var(--bg-glass)', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)', fontSize: '0.82rem', fontWeight: 700 }}>
              85+ CONSTELLATIONS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
