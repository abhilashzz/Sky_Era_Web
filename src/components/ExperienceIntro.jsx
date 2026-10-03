import React, { useState } from 'react';
import { History, Star, PenTool, CheckCircle2, RotateCcw, Compass, Sparkles, ChevronRight } from 'lucide-react';

/**
 * ExperienceIntro
 * Section 02: Museum Interactive Touch Kiosk Simulator.
 * Features a clean, uncluttered two-column layout:
 * - Left Pane: Dedicated Celestial Sky Viewport (Stars & Constellations)
 * - Right Pane: Era Info, Astronomical Context, and Interactive Controls
 * 
 * Includes 4 active touch modules:
 * 1. Historical Sky Exploration (Era Time-Scrubber & Sky Rotation)
 * 2. Interactive Star Patterns (Touch stars for cultural lore & spectral data)
 * 3. Creative Learning (Tactile star-connecting activity)
 * 4. Instant Feedback (Live precision comparison & calibration assessment)
 */
export default function ExperienceIntro() {
  const [activeModule, setActiveModule] = useState('historical'); // historical | patterns | learning | feedback

  // --- Module 1: Historical Sky Exploration State ---
  const [selectedEraIdx, setSelectedEraIdx] = useState(0);
  const [skyRotation, setSkyRotation] = useState(0); // degrees

  const eras = [
    {
      label: '300 BCE',
      name: 'Anuradhapura Zenith',
      timeframe: 'Circa 3rd Century BCE',
      constellation: 'Mriga (Orion) Meridian',
      lore: 'Zenith transit aligned with the cardinal north-south axis of sacred stupas and reservoir sluices.',
      stars: [
        { x: 110, y: 90, r: 6, label: 'Betelgeuse' },
        { x: 185, y: 85, r: 5, label: 'Bellatrix' },
        { x: 135, y: 150, r: 4.5, label: 'Belt 1' },
        { x: 150, y: 150, r: 4.5, label: 'Belt 2' },
        { x: 165, y: 150, r: 4.5, label: 'Belt 3' },
        { x: 125, y: 215, r: 5, label: 'Saiph' },
        { x: 185, y: 210, r: 6.5, label: 'Rigel' }
      ],
      lines: [
        { x1: 110, y1: 90, x2: 135, y2: 150 },
        { x1: 185, y1: 85, x2: 165, y2: 150 },
        { x1: 135, y1: 150, x2: 165, y2: 150, color: '#5BE0E5', width: 2.5 },
        { x1: 135, y1: 150, x2: 125, y2: 215 },
        { x1: 165, y1: 150, x2: 185, y2: 210 }
      ]
    },
    {
      label: '1150 CE',
      name: 'Polonnaruwa Horizon',
      timeframe: 'Circa 12th Century CE',
      constellation: 'Saptarshi (Ursa Major)',
      lore: 'The Seven Sages guided royal agrarian calendar computations and seasonal ocean trade navigations.',
      stars: [
        { x: 80, y: 105, r: 5.5, label: 'Dubhe' },
        { x: 80, y: 165, r: 5, label: 'Merak' },
        { x: 135, y: 170, r: 5, label: 'Phecda' },
        { x: 145, y: 115, r: 5, label: 'Megrez' },
        { x: 185, y: 125, r: 5, label: 'Alioth' },
        { x: 220, y: 150, r: 5.5, label: 'Mizar' },
        { x: 255, y: 185, r: 6, label: 'Alkaid' }
      ],
      lines: [
        { x1: 80, y1: 105, x2: 80, y2: 165 },
        { x1: 80, y1: 165, x2: 135, y2: 170 },
        { x1: 135, y1: 170, x2: 145, y2: 115 },
        { x1: 145, y1: 115, x2: 80, y2: 105 },
        { x1: 145, y1: 115, x2: 185, y2: 125 },
        { x1: 185, y1: 125, x2: 220, y2: 150 },
        { x1: 220, y1: 150, x2: 255, y2: 185 }
      ]
    },
    {
      label: '1650 CE',
      name: 'Galle Fort Maritime',
      timeframe: 'Circa 17th Century CE',
      constellation: 'Trishanku (Southern Cross)',
      lore: 'Maritime navigators sailing into southern ports cross-referenced the polar cross with coastal headlands.',
      stars: [
        { x: 150, y: 80, r: 6, label: 'Gacrux' },
        { x: 150, y: 220, r: 6.5, label: 'Acrux' },
        { x: 95, y: 145, r: 5, label: 'Mimosa' },
        { x: 205, y: 140, r: 4.5, label: 'Imai' }
      ],
      lines: [
        { x1: 150, y1: 80, x2: 150, y2: 220, color: 'var(--accent-gold)', width: 2 },
        { x1: 95, y1: 145, x2: 205, y2: 140, color: 'var(--accent-gold)', width: 2 }
      ]
    },
    {
      label: '2026 CE',
      name: 'Modern Interactive Horizon',
      timeframe: 'Present Day & Future',
      constellation: 'SkyEra Digital Resurrection',
      lore: 'Overcoming modern city light pollution to digitally reconstruct pristine ancestral horizons for young visitors across museums, science centres, and schools.',
      stars: [
        { x: 115, y: 100, r: 5.5, label: 'Vega' },
        { x: 190, y: 85, r: 6, label: 'Deneb' },
        { x: 205, y: 185, r: 5.5, label: 'Altair' },
        { x: 150, y: 150, r: 5, label: 'Polaris Guide' }
      ],
      lines: [
        { x1: 115, y1: 100, x2: 190, y2: 85, color: '#5BE0E5', width: 2 },
        { x1: 190, y1: 85, x2: 205, y2: 185, color: '#5BE0E5', width: 2 },
        { x1: 205, y1: 185, x2: 115, y2: 100, color: '#5BE0E5', width: 2 }
      ]
    }
  ];

  const currentEra = eras[selectedEraIdx];

  // --- Module 2: Interactive Star Lore State ---
  const [selectedStarId, setSelectedStarId] = useState(0);
  const interactivePatternStars = [
    { id: 0, name: 'Betelgeuse (Arudra)', type: 'Red Supergiant', distance: '642.5 Light-Years', lore: 'Known as the blazing shoulder of the Hunter. Ancient Sinhalese farmers observed its reddish hue to anticipate seasonal monsoon arrival.', x: 110, y: 85, color: '#F4C430' },
    { id: 1, name: 'Rigel (Bana Sagara)', type: 'Blue-White Supergiant', distance: '860 Light-Years', lore: 'The brilliant foot star of Orion. Its piercing luminescence provided maritime orientation for Indian Ocean trading dhows.', x: 190, y: 215, color: '#5BE0E5' },
    { id: 2, name: 'Belt of Orion (Thri-Taraka)', type: 'Triple Star Alignment', distance: '1,200 Light-Years', lore: 'Popularly called "The Three Kings" or "Nalawa". Observed rising in the eastern sky at dusk during the Maha harvest festival.', x: 150, y: 150, color: '#FFFFFF' }
  ];

  const activeStarLore = interactivePatternStars[selectedStarId];

  // --- Module 3: Creative Learning (Star Connection Game) State ---
  const gameNodes = [
    { id: 0, x: 90, y: 110, label: 'Star 1' },
    { id: 1, x: 130, y: 85, label: 'Star 2' },
    { id: 2, x: 180, y: 140, label: 'Star 3' },
    { id: 3, x: 220, y: 200, label: 'Star 4' }
  ];

  const [connectedNodes, setConnectedNodes] = useState([0]); // starts with node 0 active
  const isGameComplete = connectedNodes.length >= gameNodes.length;

  const handleNodeClick = (nodeId) => {
    if (isGameComplete) return;
    const nextExpected = connectedNodes.length;
    if (nodeId === nextExpected) {
      setConnectedNodes((prev) => [...prev, nodeId]);
    }
  };

  const resetGame = () => {
    setConnectedNodes([0]);
  };

  // --- Module 4: Instant Feedback State ---
  const [accuracyLevel, setAccuracyLevel] = useState(98);
  const [isVerifying, setIsVerifying] = useState(false);

  const triggerVerification = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setAccuracyLevel(Math.floor(Math.random() * 5) + 95); // 95% - 99%
      setIsVerifying(false);
    }, 600);
  };

  return (
    <section className="section-wrapper experience-intro-section" id="experience">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto' }}>
          <h2 className="section-heading">
            History Above Us. <span className="text-gradient-gold">Learning Within Reach.</span>
          </h2>
          <p className="section-subheading" style={{ margin: '1rem auto 0' }}>
            Touch the screen below to test the interactive museum kiosk simulator. Select any module to experience how visitors explore Sri Lanka’s night skies.
          </p>
        </div>

        {/* Clean Interactive Module Switcher Tabs */}
        <div
          className="kiosk-tabs-bar"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px',
            maxWidth: '920px',
            margin: '2.5rem auto 1.5rem'
          }}
        >
          <button
            onClick={() => setActiveModule('historical')}
            className={`btn ${activeModule === 'historical' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '9px 18px', borderRadius: '30px', fontSize: '0.86rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px', boxShadow: 'none' }}
          >
            <History size={15} />
            <span>1. Historical Sky</span>
          </button>

          <button
            onClick={() => setActiveModule('patterns')}
            className={`btn ${activeModule === 'patterns' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '9px 18px', borderRadius: '30px', fontSize: '0.86rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px', boxShadow: 'none' }}
          >
            <Star size={15} />
            <span>2. Star Patterns</span>
          </button>

          <button
            onClick={() => setActiveModule('learning')}
            className={`btn ${activeModule === 'learning' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '9px 18px', borderRadius: '30px', fontSize: '0.86rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px', boxShadow: 'none' }}
          >
            <PenTool size={15} />
            <span>3. Draw Constellations</span>
          </button>

          <button
            onClick={() => setActiveModule('feedback')}
            className={`btn ${activeModule === 'feedback' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '9px 18px', borderRadius: '30px', fontSize: '0.86rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px', boxShadow: 'none' }}
          >
            <CheckCircle2 size={15} />
            <span>4. Instant Feedback</span>
          </button>
        </div>

        {/* Central Physical Kiosk Frame Simulator */}
        <div className="kiosk-showcase-container" style={{ margin: '0 auto', maxWidth: '920px' }}>
          <div className="kiosk-mockup-frame" style={{ background: '#070E17', border: '1px solid var(--border-subtle)', borderRadius: '24px', padding: '16px' }}>
            
            {/* Screen Inner Bezel */}
            <div
              className="kiosk-mockup-screen"
              style={{
                position: 'relative',
                width: '100%',
                background: 'radial-gradient(ellipse at 50% 30%, #162438 0%, #09121D 90%)',
                borderRadius: '16px',
                overflow: 'hidden',
                padding: 'clamp(1.2rem, 3vw, 1.8rem)',
                border: '1px solid rgba(119, 141, 169, 0.3)'
              }}
            >
              {/* Clean Screen Header Status Bar */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 10, borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.75rem', width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--accent-gold)' }} />
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', fontWeight: 600, letterSpacing: '0.04em' }}>
                    {activeModule === 'historical' && 'Historical Sky Simulation'}
                    {activeModule === 'patterns' && 'Star Lore & Spectra'}
                    {activeModule === 'learning' && 'Constellation Tracing'}
                    {activeModule === 'feedback' && 'Horizon Accuracy Verification'}
                  </span>
                </div>
              </div>

              {/* =========================================================================
                  MODULE 1: HISTORICAL SKY EXPLORATION (2-COLUMN SEPARATION)
                  ========================================================================= */}
              {activeModule === 'historical' && (
                <div className="kiosk-screen-grid">
                  {/* Left Column: Dedicated Celestial Sky Viewport (Completely Uncluttered) */}
                  <div className="kiosk-sky-dome">
                    <svg
                      viewBox="0 0 300 300"
                      style={{
                        width: '100%',
                        height: '100%',
                        transform: `rotate(${skyRotation}deg)`,
                        transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                        transformOrigin: '150px 150px'
                      }}
                    >
                      {/* Celestial Concentric Reference Grids */}
                      <circle cx="150" cy="150" r="130" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
                      <circle cx="150" cy="150" r="90" stroke="rgba(244,196,48,0.2)" strokeWidth="1" strokeDasharray="3 3" fill="none" />
                      <circle cx="150" cy="150" r="45" stroke="rgba(91,224,229,0.2)" strokeWidth="1" strokeDasharray="2 2" fill="none" />

                      {/* Cardinal Crosshairs */}
                      <line x1="150" y1="20" x2="150" y2="280" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="3 3" />
                      <line x1="20" y1="150" x2="280" y2="150" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="3 3" />

                      {/* Era Constellation Connecting Lines */}
                      {currentEra.lines.map((l, lIdx) => (
                        <line
                          key={lIdx}
                          x1={l.x1}
                          y1={l.y1}
                          x2={l.x2}
                          y2={l.y2}
                          stroke={l.color || 'rgba(244,196,48,0.5)'}
                          strokeWidth={l.width || 1.5}
                          strokeDasharray={l.color ? 'none' : '3 2'}
                        />
                      ))}

                      {/* Era Stars */}
                      {currentEra.stars.map((s, idx) => (
                        <g key={idx}>
                          <circle cx={s.x} cy={s.y} r={s.r} fill="var(--accent-gold)" />
                          <circle cx={s.x} cy={s.y} r="2" fill="#FFFFFF" />
                        </g>
                      ))}

                      {/* Era Constellation Identifier inside SVG */}
                      <text x="150" y="278" fill="var(--accent-gold)" fontSize="11" fontWeight="700" letterSpacing="0.06em" textAnchor="middle">
                        {currentEra.constellation}
                      </text>
                    </svg>
                  </div>

                  {/* Right Column: Era Details & Interactive Scrubber Controls */}
                  <div className="kiosk-info-panel">
                    <div style={{ fontSize: '0.75rem', color: 'var(--accent-gold)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                      {currentEra.timeframe}
                    </div>

                    <h3 style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', color: '#FFFFFF', fontWeight: 700, margin: '0 0 0.5rem', lineHeight: 1.25 }}>
                      {currentEra.name}
                    </h3>

                    <p style={{ fontSize: '0.92rem', color: '#DCE3EC', lineHeight: 1.6, margin: '0 0 1.25rem' }}>
                      {currentEra.lore}
                    </p>

                    {/* Interactive Era Controls */}
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '12px' }}>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        {eras.map((e, idx) => (
                          <button
                            key={e.label}
                            onClick={() => {
                              setSelectedEraIdx(idx);
                              setSkyRotation(idx * 45);
                            }}
                            style={{
                              padding: '6px 14px',
                              borderRadius: '16px',
                              border: selectedEraIdx === idx ? '1px solid var(--accent-gold)' : '1px solid rgba(255,255,255,0.15)',
                              background: selectedEraIdx === idx ? 'rgba(244,196,48,0.2)' : 'rgba(255,255,255,0.05)',
                              color: selectedEraIdx === idx ? 'var(--accent-gold)' : '#DCE3EC',
                              fontSize: '0.8rem',
                              fontWeight: 700,
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px',
                              boxShadow: 'none',
                              transition: 'all 0.2s ease'
                            }}
                          >
                            <Compass size={13} />
                            <span>{e.label}</span>
                          </button>
                        ))}

                        <button
                          onClick={() => setSkyRotation((prev) => prev + 30)}
                          title="Rotate Celestial Horizon"
                          style={{
                            padding: '6px 12px',
                            borderRadius: '16px',
                            border: '1px solid rgba(255,255,255,0.2)',
                            background: 'rgba(255,255,255,0.08)',
                            color: '#FFFFFF',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            boxShadow: 'none'
                          }}
                        >
                          <RotateCcw size={12} />
                          <span>Rotate Sky (+30°)</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* =========================================================================
                  MODULE 2: INTERACTIVE STAR PATTERNS (2-COLUMN SEPARATION)
                  ========================================================================= */}
              {activeModule === 'patterns' && (
                <div className="kiosk-screen-grid">
                  {/* Left Column: Interactive Sky Dome with Clickable Stars */}
                  <div className="kiosk-sky-dome">
                    <svg viewBox="0 0 300 300" style={{ width: '100%', height: '100%' }}>
                      {/* Celestial Concentric Grids */}
                      <circle cx="150" cy="150" r="130" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
                      <circle cx="150" cy="150" r="90" stroke="rgba(244,196,48,0.2)" strokeWidth="1" strokeDasharray="3 3" fill="none" />

                      {/* Connecting Asterism lines */}
                      <line x1="110" y1="85" x2="150" y2="150" stroke="rgba(244,196,48,0.4)" strokeWidth="1.5" strokeDasharray="3 3" />
                      <line x1="150" y1="150" x2="190" y2="215" stroke="rgba(244,196,48,0.4)" strokeWidth="1.5" strokeDasharray="3 3" />

                      {/* Interactive Clickable Star Nodes */}
                      {interactivePatternStars.map((s) => {
                        const isSelected = selectedStarId === s.id;
                        return (
                          <g
                            key={s.id}
                            onClick={() => setSelectedStarId(s.id)}
                            style={{ cursor: 'pointer' }}
                          >
                            {/* Selection Pulse Ring */}
                            {isSelected && (
                              <circle cx={s.x} cy={s.y} r="20" stroke="var(--accent-gold)" strokeWidth="1.5" strokeDasharray="3 2" fill="none">
                                <animate attributeName="r" values="16;22;16" dur="2s" repeatCount="indefinite" />
                              </circle>
                            )}

                            {/* Main Star Body */}
                            <circle cx={s.x} cy={s.y} r={isSelected ? 9 : 7} fill={s.color} />
                            <circle cx={s.x} cy={s.y} r="3" fill="#FFFFFF" />

                            {/* Label on Screen */}
                            <text x={s.x + 12} y={s.y + 4} fill="#FFFFFF" fontSize="11" fontWeight="700">
                              {s.name.split(' ')[0]}
                            </text>
                          </g>
                        );
                      })}

                      {/* Clean Text Hint Inside SVG (No clipped pill) */}
                      <text x="150" y="278" fill="#A8B8CC" fontSize="10" fontWeight="500" letterSpacing="0.04em" textAnchor="middle">
                        Touch any star to inspect
                      </text>
                    </svg>
                  </div>

                  {/* Right Column: Selected Star Spectral Data & Cultural Lore */}
                  <div className="kiosk-info-panel">
                    <h3 style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', color: 'var(--accent-gold)', fontWeight: 800, margin: '0 0 0.4rem' }}>
                      {activeStarLore.name}
                    </h3>

                    {/* Sleek Metadata Typography */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', marginBottom: '0.75rem' }}>
                      <span style={{ color: '#5BE0E5', fontWeight: 600 }}>{activeStarLore.type}</span>
                      <span style={{ color: 'rgba(255,255,255,0.25)' }}>•</span>
                      <span style={{ color: '#DCE3EC' }}>{activeStarLore.distance}</span>
                    </div>

                    <p style={{ fontSize: '0.92rem', color: '#DCE3EC', lineHeight: 1.6, margin: '0 0 1.25rem' }}>
                      {activeStarLore.lore}
                    </p>

                    {/* Clean Star Selector Toolbar */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginTop: '0.5rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        {interactivePatternStars.map((s) => (
                          <button
                            key={s.id}
                            onClick={() => setSelectedStarId(s.id)}
                            style={{
                              background: selectedStarId === s.id ? 'rgba(244,196,48,0.15)' : 'rgba(255,255,255,0.04)',
                              border: selectedStarId === s.id ? '1px solid var(--accent-gold)' : '1px solid rgba(255,255,255,0.1)',
                              borderRadius: '14px',
                              color: selectedStarId === s.id ? 'var(--accent-gold)' : '#DCE3EC',
                              padding: '4px 12px',
                              fontSize: '0.8rem',
                              fontWeight: 600,
                              cursor: 'pointer',
                              transition: 'all 0.2s ease'
                            }}
                          >
                            {s.name.split(' ')[0]}
                          </button>
                        ))}
                      </div>

                      <button
                        onClick={() => setSelectedStarId((prev) => (prev + 1) % interactivePatternStars.length)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: 'var(--accent-gold)',
                          fontSize: '0.82rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        <span>Next Star</span>
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* =========================================================================
                  MODULE 3: CREATIVE LEARNING (2-COLUMN SEPARATION)
                  ========================================================================= */}
              {activeModule === 'learning' && (
                <div className="kiosk-screen-grid">
                  {/* Left Column: Tactile Drawing Canvas */}
                  <div className="kiosk-sky-dome">
                    <svg viewBox="0 0 300 300" style={{ width: '100%', height: '100%' }}>
                      {/* Background Celestial Rings */}
                      <circle cx="150" cy="150" r="130" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
                      <circle cx="150" cy="150" r="90" stroke="rgba(244,196,48,0.2)" strokeWidth="1" strokeDasharray="3 3" fill="none" />

                      {/* User Drawn Connections */}
                      {connectedNodes.map((nodeIdx, i) => {
                        if (i === 0) return null;
                        const prev = gameNodes[connectedNodes[i - 1]];
                        const curr = gameNodes[nodeIdx];
                        return (
                          <line
                            key={i}
                            x1={prev.x}
                            y1={prev.y}
                            x2={curr.x}
                            y2={curr.y}
                            stroke="var(--accent-gold)"
                            strokeWidth="2.5"
                          />
                        );
                      })}

                      {/* Remaining Guide Dashes */}
                      {!isGameComplete && (
                        <line
                          x1={gameNodes[connectedNodes[connectedNodes.length - 1]].x}
                          y1={gameNodes[connectedNodes[connectedNodes.length - 1]].y}
                          x2={gameNodes[connectedNodes.length].x}
                          y2={gameNodes[connectedNodes.length].y}
                          stroke="rgba(91, 224, 229, 0.4)"
                          strokeWidth="1.5"
                          strokeDasharray="4 4"
                        />
                      )}

                      {/* Clickable Star Nodes */}
                      {gameNodes.map((node) => {
                        const isConnected = connectedNodes.includes(node.id);
                        const isNextTarget = connectedNodes.length === node.id;
                        return (
                          <g
                            key={node.id}
                            onClick={() => handleNodeClick(node.id)}
                            style={{ cursor: isNextTarget ? 'pointer' : 'default' }}
                          >
                            {isNextTarget && (
                              <circle cx={node.x} cy={node.y} r="18" stroke="var(--accent-gold)" strokeWidth="1.5" strokeDasharray="3 3" fill="none">
                                <animate attributeName="r" values="14;20;14" dur="1.5s" repeatCount="indefinite" />
                              </circle>
                            )}

                            <circle
                              cx={node.x}
                              cy={node.y}
                              r={isConnected ? 7.5 : 6}
                              fill={isConnected ? 'var(--accent-gold)' : 'rgba(255,255,255,0.4)'}
                            />
                            <circle cx={node.x} cy={node.y} r="2.5" fill="#FFFFFF" />

                            <text x={node.x - 14} y={node.y - 12} fill={isConnected ? 'var(--accent-gold)' : '#A8B8CC'} fontSize="10" fontWeight="700">
                              {node.label}
                            </text>
                          </g>
                        );
                      })}
                      {/* Clean Text Hint Inside SVG (No clipped pill) */}
                      <text x="150" y="278" fill={isGameComplete ? '#5BE0E5' : 'var(--accent-gold)'} fontSize="10" fontWeight="700" letterSpacing="0.04em" textAnchor="middle">
                        {isGameComplete ? '✨ Constellation Reconstructed!' : `Touch Star ${connectedNodes.length + 1} to Connect`}
                      </text>
                    </svg>
                  </div>

                  {/* Right Column: Step Guidance & Activity Controls */}
                  <div className="kiosk-info-panel">
                    <h3 style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', color: '#FFFFFF', fontWeight: 700, margin: '0 0 0.5rem' }}>
                      Hands-On Constellation Reconstruction
                    </h3>

                    <p style={{ fontSize: '0.92rem', color: '#DCE3EC', lineHeight: 1.6, margin: '0 0 1rem' }}>
                      Follow ancient navigation methods by tracing star paths directly on the touch screen. Connecting stars unlocks historical notes.
                    </p>

                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '12px', marginBottom: '1rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '6px' }}>
                        <span style={{ color: '#A8B8CC' }}>Reconstruction Progress</span>
                        <strong style={{ color: 'var(--accent-gold)' }}>{connectedNodes.length} / {gameNodes.length} Stars</strong>
                      </div>
                      <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                        <div style={{ width: `${(connectedNodes.length / gameNodes.length) * 100}%`, height: '100%', background: 'var(--accent-gold)', transition: 'width 0.3s ease' }} />
                      </div>
                    </div>

                    <div>
                      <button
                        onClick={resetGame}
                        style={{
                          padding: '8px 18px',
                          borderRadius: '18px',
                          background: 'rgba(255,255,255,0.06)',
                          border: '1px solid rgba(255,255,255,0.2)',
                          color: '#DCE3EC',
                          fontSize: '0.82rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        <RotateCcw size={13} />
                        <span>Reset Drawing</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* =========================================================================
                  MODULE 4: INSTANT FEEDBACK (2-COLUMN SEPARATION)
                  ========================================================================= */}
              {activeModule === 'feedback' && (
                <div className="kiosk-screen-grid">
                  {/* Left Column: Calibration Target Gauge */}
                  <div className="kiosk-sky-dome">
                    <svg viewBox="0 0 300 300" style={{ width: '100%', height: '100%' }}>
                      <circle cx="150" cy="150" r="130" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none" />
                      <circle cx="150" cy="150" r="95" stroke="rgba(91,224,229,0.2)" strokeWidth="1" strokeDasharray="3 3" fill="none" />
                      <circle cx="150" cy="150" r="60" stroke="rgba(244,196,48,0.3)" strokeWidth="1.5" fill="none" />

                      <line x1="150" y1="15" x2="150" y2="285" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4" />
                      <line x1="15" y1="150" x2="285" y2="150" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4" />

                      {/* Animated calibration reticle */}
                      <circle cx="150" cy="150" r="40" stroke="var(--accent-gold)" strokeWidth="2" strokeDasharray="6 4" fill="none">
                        <animateTransform attributeName="transform" type="rotate" from="0 150 150" to="360 150 150" dur="10s" repeatCount="indefinite" />
                      </circle>

                      <circle cx="150" cy="150" r="8" fill="var(--accent-gold)" />
                      <circle cx="150" cy="150" r="3" fill="#FFFFFF" />
                    </svg>

                    <div style={{ position: 'absolute', textAlign: 'center', pointerEvents: 'none' }}>
                      <div style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--accent-gold)', lineHeight: 1 }}>
                        {accuracyLevel}%
                      </div>
                      <div style={{ fontSize: '0.68rem', color: '#A8B8CC', letterSpacing: '0.08em', marginTop: '4px', textTransform: 'uppercase' }}>
                        PRECISION MATCH
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Calibration Report & Recalibrate Trigger */}
                  <div className="kiosk-info-panel">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '1rem' }}>
                      <div style={{ background: 'rgba(255,255,255,0.04)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
                        <span style={{ fontSize: '0.7rem', color: '#A8B8CC', display: 'block', marginBottom: '2px' }}>CALIBRATION OFFSET</span>
                        <strong style={{ fontSize: '1.25rem', color: '#5BE0E5' }}>&lt; 0.3°</strong>
                      </div>
                      <div style={{ background: 'rgba(255,255,255,0.04)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
                        <span style={{ fontSize: '0.7rem', color: '#A8B8CC', display: 'block', marginBottom: '2px' }}>HORIZON STATUS</span>
                        <strong style={{ fontSize: '1.25rem', color: '#FFFFFF' }}>GRADE A</strong>
                      </div>
                    </div>

                    <div style={{ background: 'rgba(244,196,48,0.08)', border: '1px solid rgba(244,196,48,0.25)', borderRadius: '10px', padding: '10px 14px', marginBottom: '1.25rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                        <Sparkles size={15} color="var(--accent-gold)" />
                        <strong style={{ color: 'var(--accent-gold)', fontSize: '0.88rem' }}>
                          Astronomical Accuracy Validated!
                        </strong>
                      </div>
                      <p style={{ fontSize: '0.84rem', color: '#DCE3EC', lineHeight: 1.5, margin: 0 }}>
                        "Your reconstructed constellation aligns with the ancient Sri Lankan agricultural horizon markers."
                      </p>
                    </div>

                    <div>
                      <button
                        onClick={triggerVerification}
                        disabled={isVerifying}
                        style={{
                          padding: '8px 20px',
                          borderRadius: '20px',
                          background: 'var(--accent-gold)',
                          border: 'none',
                          color: '#0D1B2A',
                          fontWeight: 700,
                          fontSize: '0.82rem',
                          cursor: isVerifying ? 'wait' : 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          boxShadow: 'none'
                        }}
                      >
                        <CheckCircle2 size={15} />
                        <span>{isVerifying ? 'Evaluating Precision...' : 'Run Precision Test Again'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
