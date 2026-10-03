import React, { useState } from 'react';
import { Clock } from 'lucide-react';

export default function TimeTravel() {
  const [currentEraIndex, setCurrentEraIndex] = useState(0);

  const eras = [
    {
      id: 'ancient',
      number: 'STAGE 01',
      title: 'Ancient Era',
      timeframe: 'Circa 3rd Century BCE – 5th Century CE',
      location: 'Anuradhapura & Sigiriya Horizons',
      description: 'Beneath unpolluted equatorial skies, ancient builders aligned stupas with celestial cardinal poles. Priests and architects observed zenith transits to time irrigation water releases and agrarian rituals.',
      starAccent: 'var(--accent-gold)',
      notableConstellation: 'Mriga (Orion / Celestial Hunter)',
      constellationCoords: [
        { x: 60, y: 40 }, { x: 120, y: 30 }, { x: 180, y: 50 },
        { x: 120, y: 80 }, { x: 110, y: 115 }, { x: 130, y: 115 },
        { x: 80, y: 160 }, { x: 160, y: 155 }
      ],
      connections: [
        [0, 1], [1, 2], [1, 3], [3, 4], [3, 5], [4, 6], [5, 7]
      ]
    },
    {
      id: 'medieval',
      number: 'STAGE 02',
      title: 'Medieval Era',
      timeframe: 'Circa 11th Century – 14th Century CE',
      location: 'Polonnaruwa & Yapahuwa Kingdoms',
      description: 'Astronomical calculations carved into granite slabs guided agrarian cycles and royal calendar systems. Indian Ocean maritime traders cross-referenced polar stars with tropical asterisms to navigate into island ports.',
      starAccent: '#5BE0E5',
      notableConstellation: 'Saptarshi (The Seven Sages / Ursa Major)',
      constellationCoords: [
        { x: 40, y: 60 }, { x: 80, y: 65 }, { x: 110, y: 90 },
        { x: 150, y: 95 }, { x: 190, y: 75 }, { x: 210, y: 100 },
        { x: 190, y: 135 }, { x: 155, y: 130 }
      ],
      connections: [
        [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 3]
      ]
    },
    {
      id: 'colonial',
      number: 'STAGE 03',
      title: 'Colonial Era',
      timeframe: 'Circa 16th Century – 19th Century CE',
      location: 'Galle Fort & Maritime Coasts',
      description: 'European galleons navigated into southern ports using early sextants, cross-referencing southern constellations like Crux with local headlands. Western astronomy met age-old celestial folklore at coastal ports.',
      starAccent: 'var(--accent-gold)',
      notableConstellation: 'Crux (The Southern Cross)',
      constellationCoords: [
        { x: 120, y: 35 }, { x: 120, y: 155 },
        { x: 75, y: 95 }, { x: 165, y: 95 }
      ],
      connections: [
        [0, 1], [2, 3]
      ]
    },
    {
      id: 'modern',
      number: 'STAGE 04',
      title: 'Modern Sky',
      timeframe: 'Present Day & Future Horizons',
      location: 'Educational & Cultural Spaces',
      description: 'Modern city light pollution obscures the ancestral night sky for younger generations. Sky Era digitally resurrects pristine historical vistas inside interactive kiosks, empowering visitors to identify and explore their celestial heritage in museums, science centres, and schools.',
      starAccent: 'var(--accent-gold)',
      notableConstellation: 'Sky Era Complete Constellation Map',
      constellationCoords: [
        { x: 60, y: 60 }, { x: 120, y: 35 }, { x: 180, y: 65 },
        { x: 140, y: 110 }, { x: 80, y: 155 }, { x: 190, y: 155 }
      ],
      connections: [
        [0, 1], [1, 2], [2, 3], [3, 0], [3, 4], [3, 5]
      ]
    }
  ];

  const era = eras[currentEraIndex];
  const progressPercent = (currentEraIndex / (eras.length - 1)) * 100;

  return (
    <section className="section-wrapper time-travel-section" id="time-travel">
      <div className="container">
        {/* Section Heading (Clean without redundant eyebrow tag) */}
        <div style={{ maxWidth: '820px', margin: '0 auto 2.5rem', textAlign: 'center' }}>
          <h2 className="section-heading" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.8)' }}>
            Travel Through Time.
          </h2>
          <p className="section-subheading" style={{ margin: '0.75rem auto 0', color: 'var(--text-primary)', opacity: 0.9, textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)' }}>
            Move across selected moments in history and discover how the sky becomes part of the story.
          </p>
        </div>

        {/* Clean 2-Column Era Display Container (Zero Text Overlap) */}
        <div className="era-explorer-container">
          <div className="era-two-column-layout">
            {/* Left Column: Information (No Overlapping Vectors) */}
            <div className="era-info-column">
              {/* Refined Museum Era Badge / Timeframe Chip */}
              <div className="era-timeframe-badge">
                <span className="era-stage-pill">{era.number}</span>
                <span className="era-timeframe-divider" />
                <div className="era-timeframe-info">
                  <Clock size={13} className="era-timeframe-icon" />
                  <span>{era.timeframe}</span>
                </div>
              </div>

              <h3 className="era-title">{era.title}</h3>
              <div className="era-subtitle">{era.location}</div>
              <p className="era-desc">{era.description}</p>
            </div>

            {/* Right Column: Dedicated Framed Celestial Viewport */}
            <div className="era-visual-column">
              <div className="era-sky-frame">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', fontSize: '0.75rem', color: 'var(--accent-gold)', fontWeight: 700, letterSpacing: '0.1em' }}>
                  <span>CELESTIAL ALIGNMENT</span>
                  <span style={{ color: 'var(--text-muted)' }}>LAT 7° N</span>
                </div>

                <svg viewBox="0 0 240 190" style={{ width: '100%', height: '100%', maxHeight: '180px' }}>
                  {/* Subtle Grid Coordinates */}
                  <circle cx="120" cy="95" r="75" stroke="var(--border-subtle)" strokeWidth="1" strokeDasharray="3 3" fill="none" />

                  {/* Connecting Lines */}
                  {era.connections.map(([fromIdx, toIdx], i) => (
                    <line
                      key={i}
                      x1={era.constellationCoords[fromIdx].x}
                      y1={era.constellationCoords[fromIdx].y}
                      x2={era.constellationCoords[toIdx].x}
                      y2={era.constellationCoords[toIdx].y}
                      stroke={era.starAccent}
                      strokeWidth="1.8"
                      strokeDasharray="3 2"
                      opacity="0.85"
                    />
                  ))}

                  {/* Stars */}
                  {era.constellationCoords.map((pt, i) => (
                    <g key={i}>
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r="6"
                        fill={era.starAccent}
                        filter="drop-shadow(0 0 8px rgba(244, 196, 48, 0.8))"
                      />
                      <circle cx={pt.x} cy={pt.y} r="2.5" fill="#FFFFFF" />
                    </g>
                  ))}
                </svg>

                <div style={{ textAlign: 'center', marginTop: '6px', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                  {era.notableConstellation}
                </div>
              </div>
            </div>
          </div>

          {/* Era Navigation Scrubber & Buttons */}
          <div className="era-timeline-controls">
            <div className="era-buttons-row">
              {eras.map((e, idx) => (
                <button
                  key={e.id}
                  className={`era-btn ${currentEraIndex === idx ? 'active' : ''}`}
                  onClick={() => setCurrentEraIndex(idx)}
                >
                  <span className="era-btn-num">{e.number}</span>
                  <span className="era-btn-label">{e.title}</span>
                </button>
              ))}
            </div>

            {/* Continuous Timeline Track */}
            <div className="timeline-scrubber-wrapper">
              <span className="timeline-bound-label">PAST</span>
              <div className="timeline-track">
                <div
                  className="timeline-progress"
                  style={{ width: `${progressPercent}%` }}
                />
                <div
                  className="timeline-node-active"
                  style={{ left: `${progressPercent}%` }}
                />
              </div>
              <span className="timeline-bound-label">PRESENT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
