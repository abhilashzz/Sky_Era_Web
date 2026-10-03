import React, { useState, useEffect } from 'react';
import { Clock, ZoomIn, PenTool, Award, Play, Pause, RotateCcw, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';

/**
 * ExperiencePreview
 * Section 12: "See SkyEra in Action" — Full-Width Expandable Accordion Showcase.
 * 
 * Each module is an individual card:
 * - 1 card is EXPANDED to the full width of the section for deep, crystal-clear interaction.
 * - The other 3 cards are COLLAPSED into sleek, clickable trigger cards.
 * - Clicking any collapsed card expands it into full width and collapses the others.
 */
export default function ExperiencePreview() {
  const [expandedCard, setExpandedCard] = useState('time'); // 'time' | 'discovery' | 'drawing' | 'feedback'

  // =========================================================================
  // CARD 1: TIME EXPLORATION STATE (Precession & Epoch Slider)
  // =========================================================================
  const [epochYear, setEpochYear] = useState(-300);
  const [isAutoDrifting, setIsAutoDrifting] = useState(false);

  useEffect(() => {
    let timer;
    if (isAutoDrifting) {
      timer = setInterval(() => {
        setEpochYear((prev) => {
          if (prev >= 2026) return -500;
          return prev + 50;
        });
      }, 150);
    }
    return () => clearInterval(timer);
  }, [isAutoDrifting]);

  const precessionAngle = ((epochYear + 500) / 2526) * 40 - 20;

  const epochLabels = [
    { year: -500, label: '500 BCE' },
    { year: -300, label: '300 BCE' },
    { year: 1150, label: '1150 CE' },
    { year: 1650, label: '1650 CE' },
    { year: 2026, label: '2026 CE' }
  ];

  // =========================================================================
  // CARD 2: STAR DISCOVERY STATE (Pleiades Optical Zoom Magnifier)
  // =========================================================================
  const [zoomLevel, setZoomLevel] = useState(3);
  const [selectedSister, setSelectedSister] = useState('alcyone');

  const pleiadesStars = [
    { id: 'alcyone', name: 'Alcyone (Eta Tauri)', mag: '2.87', type: 'B-type Blue Giant', role: 'Brightest Sister & Cluster Center', x: 250, y: 115, r: 8 },
    { id: 'maia', name: 'Maia (20 Tauri)', mag: '3.87', type: 'Blue-White Giant', role: 'Wrapped in bright reflection nebula', x: 215, y: 85, r: 6.5 },
    { id: 'electra', name: 'Electra (17 Tauri)', mag: '3.70', type: 'Rapid B-type Rotator', role: 'Third brightest, flattened at poles', x: 190, y: 120, r: 6.5 },
    { id: 'taygeta', name: 'Taygeta (19 Tauri)', mag: '4.30', type: 'Triple Star System', role: 'Delicate companion in northern wing', x: 210, y: 65, r: 5.5 },
    { id: 'celaeno', name: 'Celaeno (16 Tauri)', mag: '5.45', type: 'Subgiant Star', role: 'Known as the "Lost Pleiad"', x: 175, y: 95, r: 4.5 },
    { id: 'sterope', name: 'Asterope (21 Tauri)', mag: '5.64', type: 'Visual Binary Star', role: 'Double star pair', x: 265, y: 70, r: 4.5 },
    { id: 'merope', name: 'Merope (23 Tauri)', mag: '4.17', type: 'Beta Cephei Variable', role: 'Illuminates the Merope Nebula', x: 275, y: 145, r: 6.5 }
  ];

  const activeSisterData = pleiadesStars.find((s) => s.id === selectedSister) || pleiadesStars[0];

  // =========================================================================
  // CARD 3: DRAWING CHALLENGE STATE (Constellation Tracing Game)
  // =========================================================================
  const tracingStars = [
    { id: 0, x: 110, y: 75, label: 'Murzim' },
    { id: 1, x: 190, y: 55, label: 'Sirius (Lubdaka)' },
    { id: 2, x: 265, y: 85, label: 'Muliphein' },
    { id: 3, x: 245, y: 145, label: 'Wezen' },
    { id: 4, x: 200, y: 195, label: 'Adhara' },
    { id: 5, x: 295, y: 180, label: 'Aludra' }
  ];

  const [connectedTrace, setConnectedTrace] = useState([0]);
  const isTracingComplete = connectedTrace.length >= tracingStars.length;

  const handleTraceClick = (idx) => {
    if (isTracingComplete) return;
    if (idx === connectedTrace.length) {
      setConnectedTrace((prev) => [...prev, idx]);
    }
  };

  const resetTracing = () => {
    setConnectedTrace([0]);
  };

  // =========================================================================
  // CARD 4: HERITAGE BADGE & QUIZ STATE
  // =========================================================================
  const [selectedBadge, setSelectedBadge] = useState('maha');
  const [quizAnswer, setQuizAnswer] = useState(null);

  const badges = {
    maha: {
      id: 'maha',
      title: 'Maha Harvest Calendar Badge',
      icon: '🌾',
      level: 'Heritage Master Grade A',
      description: 'Accredited for correctly aligning the Three Kings belt stars with the royal Maha harvest calendar.'
    },
    ocean: {
      id: 'ocean',
      title: 'Indian Ocean Navigator Badge',
      icon: '🧭',
      level: 'Master Maritime Navigator',
      description: 'Accredited for calculating true south headings for traditional spice voyagers arriving into southern ports.'
    },
    sage: {
      id: 'sage',
      title: 'Royal Stupa Astronomer Badge',
      icon: '🏛️',
      level: 'Anuradhapura Royal Court Grade',
      description: 'Accredited for computing the cardinal north-south meridian axis for royal reservoir sluices and sacred stupas.'
    }
  };

  const activeBadgeData = badges[selectedBadge];

  return (
    <section className="section-wrapper" id="experience-preview">
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="section-heading">
            See Sky Era in Action. <span className="text-gradient-gold">Interactive Museum Kiosk Modules.</span>
          </h2>
          <p className="section-subheading" style={{ margin: '1rem auto 0' }}>
            Click any module below to expand its full live touchscreen experience. One module expands to full width while others collapse cleanly:
          </p>
        </div>

        {/* Full-Width Expandable Accordion Cards Stack */}
        <div className="preview-accordion-stack">

          {/* =================================================================
              CARD 1: TIME EXPLORATION (ACTUAL INTERACTIVE PRECESSION SLIDER)
              ================================================================= */}
          <div className={`preview-accordion-card ${expandedCard === 'time' ? 'expanded' : 'collapsed'}`}>
            <div
              className="preview-accordion-header"
              onClick={() => setExpandedCard('time')}
            >
              <div className="preview-accordion-header-left">
                <div className="preview-accordion-icon">
                  <Clock size={20} color="var(--accent-gold)" />
                </div>
                <div className="preview-accordion-title-wrap">
                  <h3 className="preview-accordion-title">
                    1. Historical Time Precession Simulator
                  </h3>
                  <span className="preview-accordion-subtitle">
                    Earth’s 2,500-Year Celestial Axial Wobble & Horizon Drift
                  </span>
                </div>
              </div>

              <div className="preview-accordion-header-right">
                {expandedCard === 'time' ? (
                  <span className="preview-status-active">
                    ● ACTIVE
                  </span>
                ) : (
                  <span className="preview-status-collapsed">
                    <span>Expand Module</span>
                    <ChevronDown size={14} />
                  </span>
                )}
              </div>
            </div>

            {expandedCard === 'time' && (
              <div className="preview-accordion-body">
                <div className="preview-accordion-grid">
                  {/* Left: Full-Width Horizon Arc Canvas */}
                  <div className="preview-canvas-box" style={{ padding: '14px' }}>
                    <svg viewBox="0 0 500 210" style={{ width: '100%', height: '100%' }}>
                      {/* Sky Horizon Arc */}
                      <path
                        d="M 50 170 A 190 190 0 0 1 450 170"
                        stroke="rgba(244,196,48,0.25)"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                        fill="none"
                      />
                      <line x1="30" y1="170" x2="470" y2="170" stroke="var(--accent-gold)" strokeWidth="1.5" />
                      <line x1="250" y1="15" x2="250" y2="170" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="3 3" />

                      {/* Rotating Precession Sky Group */}
                      <g
                        transform={`rotate(${precessionAngle} 250 170)`}
                        style={{ transition: isAutoDrifting ? 'transform 0.15s linear' : 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
                      >
                        <circle cx="250" cy="30" r="6" fill="var(--accent-gold)" />
                        <circle cx="250" cy="30" r="2" fill="#FFFFFF" />
                        <text x="250" y="16" fill="var(--accent-gold)" fontSize="11" fontWeight="700" textAnchor="middle">
                          Polaris Guide
                        </text>

                        <circle cx="160" cy="80" r="6" fill="#5BE0E5" />
                        <text x="145" y="70" fill="#5BE0E5" fontSize="10" fontWeight="600" textAnchor="middle">
                          Mriga (Orion)
                        </text>

                        <circle cx="340" cy="80" r="6" fill="#5BE0E5" />
                        <text x="355" y="70" fill="#5BE0E5" fontSize="10" fontWeight="600" textAnchor="middle">
                          Southern Cross
                        </text>

                        <circle cx="205" cy="125" r="5.5" fill="#FFFFFF" />
                        <text x="175" y="138" fill="#A8B8CC" fontSize="10" textAnchor="middle">
                          Sirius (Lubdaka)
                        </text>
                      </g>

                      <text x="250" y="194" fill="#A8B8CC" fontSize="10" textAnchor="middle" fontFamily="monospace">
                        LATITUDE 7.87° NORTH • SRI LANKA EQUATORIAL HORIZON
                      </text>
                    </svg>
                  </div>

                  {/* Right: Full-Size Slider & Controls */}
                  <div style={{ padding: '0.5rem 0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                      <span style={{ fontSize: '0.9rem', color: '#DCE3EC', fontWeight: 600 }}>
                        Historical Epoch Year:
                      </span>
                      <strong style={{ fontSize: '1.35rem', color: 'var(--accent-gold)' }}>
                        {epochYear < 0 ? `${Math.abs(epochYear)} BCE` : `${epochYear} CE`}
                      </strong>
                    </div>

                    <input
                      type="range"
                      min="-500"
                      max="2026"
                      step="25"
                      value={epochYear}
                      onChange={(e) => {
                        setIsAutoDrifting(false);
                        setEpochYear(Number(e.target.value));
                      }}
                      style={{ width: '100%', accentColor: 'var(--accent-gold)', cursor: 'pointer', height: '6px' }}
                    />

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginTop: '16px' }}>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        {epochLabels.map((item) => (
                          <button
                            key={item.year}
                            onClick={() => {
                              setIsAutoDrifting(false);
                              setEpochYear(item.year);
                            }}
                            style={{
                              padding: '6px 14px',
                              borderRadius: '14px',
                              border: epochYear === item.year ? '1px solid var(--accent-gold)' : '1px solid rgba(255,255,255,0.15)',
                              background: epochYear === item.year ? 'rgba(244,196,48,0.2)' : 'rgba(255,255,255,0.05)',
                              color: epochYear === item.year ? 'var(--accent-gold)' : '#DCE3EC',
                              fontSize: '0.8rem',
                              fontWeight: 600,
                              cursor: 'pointer'
                            }}
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>

                      <button
                        onClick={() => setIsAutoDrifting((prev) => !prev)}
                        style={{
                          padding: '6px 14px',
                          borderRadius: '14px',
                          background: isAutoDrifting ? 'rgba(244,196,48,0.25)' : 'rgba(255,255,255,0.08)',
                          border: '1px solid var(--accent-gold)',
                          color: 'var(--accent-gold)',
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        {isAutoDrifting ? <Pause size={13} /> : <Play size={13} />}
                        <span>{isAutoDrifting ? 'Pause Drift' : 'Auto-Drift 2,500 Years'}</span>
                      </button>
                    </div>

                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: '14px 0 0' }}>
                      Demonstrates Earth's 26,000-year axial precession. Notice how the celestial pole shifted relative to Anuradhapura’s sacred stupa zenith axis across history.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* =================================================================
              CARD 2: STAR CLUSTER DISCOVERY (PLEIADES OPTICAL ZOOM)
              ================================================================= */}
          <div className={`preview-accordion-card ${expandedCard === 'discovery' ? 'expanded' : 'collapsed'}`}>
            <div
              className="preview-accordion-header"
              onClick={() => setExpandedCard('discovery')}
            >
              <div className="preview-accordion-header-left">
                <div className="preview-accordion-icon">
                  <ZoomIn size={20} color="#5BE0E5" />
                </div>
                <div className="preview-accordion-title-wrap">
                  <h3 className="preview-accordion-title">
                    2. Deep-Sky Cluster Optical Magnifier
                  </h3>
                  <span className="preview-accordion-subtitle">
                    Telescopic Resolution of Krittika (Pleiades / Seven Sisters)
                  </span>
                </div>
              </div>

              <div className="preview-accordion-header-right">
                {expandedCard === 'discovery' ? (
                  <span className="preview-status-active">
                    ● ACTIVE
                  </span>
                ) : (
                  <span className="preview-status-collapsed">
                    <span>Expand Module</span>
                    <ChevronDown size={14} />
                  </span>
                )}
              </div>
            </div>

            {expandedCard === 'discovery' && (
              <div className="preview-accordion-body">
                <div className="preview-accordion-grid">
                  {/* Left: Viewfinder Canvas */}
                  <div className="preview-canvas-box" style={{ background: 'radial-gradient(circle at 50% 50%, #0B1C33 0%, #030811 100%)', border: '1px solid rgba(91,224,229,0.3)' }}>
                    <svg viewBox="0 0 450 240" style={{ width: '100%', height: '100%' }}>
                      {zoomLevel <= 3 && (
                        <ellipse cx="225" cy="115" rx="90" ry="55" fill="rgba(91,224,229,0.15)" filter="blur(16px)" />
                      )}
                      <circle cx="225" cy="115" r="95" stroke="rgba(91,224,229,0.25)" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                      <line x1="225" y1="10" x2="225" y2="220" stroke="rgba(91,224,229,0.1)" strokeWidth="1" strokeDasharray="3 3" />
                      <line x1="120" y1="115" x2="330" y2="115" stroke="rgba(91,224,229,0.1)" strokeWidth="1" strokeDasharray="3 3" />

                      {pleiadesStars.map((s) => {
                        const isTarget = selectedSister === s.id;
                        const scale = zoomLevel === 1 ? 0.6 : zoomLevel === 3 ? 1 : zoomLevel === 8 ? 1.4 : 1.8;
                        const cx = 225 + (s.x - 225) * (zoomLevel / 3);
                        const cy = 115 + (s.y - 115) * (zoomLevel / 3);

                        if (zoomLevel === 1 && s.id !== 'alcyone' && s.id !== 'maia') return null;

                        return (
                          <g key={s.id} onClick={() => setSelectedSister(s.id)} style={{ cursor: 'pointer' }}>
                            {isTarget && (
                              <circle cx={cx} cy={cy} r={s.r * scale + 10} stroke="var(--accent-gold)" strokeWidth="1.5" strokeDasharray="3 2" fill="none">
                                <animate attributeName="r" values={`${s.r * scale + 6};${s.r * scale + 12};${s.r * scale + 6}`} dur="2s" repeatCount="indefinite" />
                              </circle>
                            )}
                            <circle cx={cx} cy={cy} r={s.r * scale} fill={isTarget ? 'var(--accent-gold)' : '#5BE0E5'} />
                            <circle cx={cx} cy={cy} r={s.r * scale * 0.4} fill="#FFFFFF" />
                            {zoomLevel >= 3 && (
                              <text x={cx + 10} y={cy + 4} fill="#FFFFFF" fontSize={zoomLevel >= 8 ? '11' : '9'} fontWeight="700">
                                {s.name.split(' ')[0]}
                              </text>
                            )}
                          </g>
                        );
                      })}
                    </svg>

                    <div style={{ position: 'absolute', bottom: '10px', left: '14px', fontSize: '0.74rem', color: '#5BE0E5', fontFamily: 'monospace' }}>
                      MAGNIFICATION {zoomLevel}.0X • {zoomLevel === 1 ? '2 STARS VISIBLE' : zoomLevel === 3 ? '5 STARS RESOLVED' : '7/7 SISTERS RESOLVED'}
                    </div>
                  </div>

                  {/* Right: Controls & Info */}
                  <div style={{ padding: '0.5rem 0' }}>
                    <div style={{ fontSize: '0.82rem', color: 'var(--accent-gold)', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '10px' }}>
                      SELECT OPTICAL MAGNIFICATION:
                    </div>

                    <div style={{ display: 'flex', gap: '8px', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                      {[
                        { level: 1, label: '1X Naked Eye' },
                        { level: 3, label: '3X Binoculars' },
                        { level: 8, label: '8X Telescope' },
                        { level: 15, label: '15X Deep Space' }
                      ].map((opt) => (
                        <button
                          key={opt.level}
                          onClick={() => setZoomLevel(opt.level)}
                          style={{
                            padding: '7px 15px',
                            borderRadius: '14px',
                            border: zoomLevel === opt.level ? '1px solid var(--accent-gold)' : '1px solid rgba(255,255,255,0.15)',
                            background: zoomLevel === opt.level ? 'rgba(244,196,48,0.2)' : 'rgba(255,255,255,0.05)',
                            color: zoomLevel === opt.level ? 'var(--accent-gold)' : '#DCE3EC',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            cursor: 'pointer'
                          }}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>

                    {/* Selected Star Details Card */}
                    <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(244,196,48,0.25)', borderRadius: '14px', padding: '16px 18px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                        <strong style={{ fontSize: '1.05rem', color: 'var(--accent-gold)' }}>
                          {activeSisterData.name}
                        </strong>
                        <span style={{ fontSize: '0.78rem', color: '#5BE0E5' }}>
                          Mag {activeSisterData.mag} • 444 Light-Years
                        </span>
                      </div>
                      <div style={{ fontSize: '0.82rem', color: '#A8B8CC', marginBottom: '8px' }}>
                        Spectral Class: {activeSisterData.type}
                      </div>
                      <p style={{ fontSize: '0.88rem', color: '#DCE3EC', margin: 0, lineHeight: 1.6 }}>
                        {activeSisterData.role}. In ancient Sri Lanka, the dusk appearance of Krittika marked crucial auspicious transition dates for agrarian planting.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* =================================================================
              CARD 3: CONSTELLATION TRACING CHALLENGE
              ================================================================= */}
          <div className={`preview-accordion-card ${expandedCard === 'drawing' ? 'expanded' : 'collapsed'}`}>
            <div
              className="preview-accordion-header"
              onClick={() => setExpandedCard('drawing')}
            >
              <div className="preview-accordion-header-left">
                <div className="preview-accordion-icon">
                  <PenTool size={20} color="var(--accent-gold)" />
                </div>
                <div className="preview-accordion-title-wrap">
                  <h3 className="preview-accordion-title">
                    3. Tactile Constellation Tracing Game
                  </h3>
                  <span className="preview-accordion-subtitle">
                    Reconstruct Canis Major (Lubdaka / Sirius) by Touch
                  </span>
                </div>
              </div>

              <div className="preview-accordion-header-right">
                {expandedCard === 'drawing' ? (
                  <span className="preview-status-active">
                    ● ACTIVE
                  </span>
                ) : (
                  <span className="preview-status-collapsed">
                    <span>Expand Module</span>
                    <ChevronDown size={14} />
                  </span>
                )}
              </div>
            </div>

            {expandedCard === 'drawing' && (
              <div className="preview-accordion-body">
                <div className="preview-accordion-grid">
                  {/* Left: Interactive Canvas */}
                  <div className="preview-canvas-box">
                    <svg viewBox="0 0 380 240" style={{ width: '100%', height: '100%' }}>
                      {connectedTrace.map((nodeIdx, i) => {
                        if (i === 0) return null;
                        const prev = tracingStars[connectedTrace[i - 1]];
                        const curr = tracingStars[nodeIdx];
                        return (
                          <line
                            key={i}
                            x1={prev.x}
                            y1={prev.y}
                            x2={curr.x}
                            y2={curr.y}
                            stroke="var(--accent-gold)"
                            strokeWidth="3"
                          />
                        );
                      })}

                      {!isTracingComplete && (
                        <line
                          x1={tracingStars[connectedTrace[connectedTrace.length - 1]].x}
                          y1={tracingStars[connectedTrace[connectedTrace.length - 1]].y}
                          x2={tracingStars[connectedTrace.length].x}
                          y2={tracingStars[connectedTrace.length].y}
                          stroke="rgba(91,224,229,0.4)"
                          strokeWidth="1.5"
                          strokeDasharray="4 4"
                        />
                      )}

                      {tracingStars.map((s) => {
                        const isConnected = connectedTrace.includes(s.id);
                        const isNext = connectedTrace.length === s.id;

                        return (
                          <g key={s.id} onClick={() => handleTraceClick(s.id)} style={{ cursor: isNext ? 'pointer' : 'default' }}>
                            {isNext && (
                              <circle cx={s.x} cy={s.y} r="18" stroke="var(--accent-gold)" strokeWidth="1.5" strokeDasharray="3 3" fill="none">
                                <animate attributeName="r" values="14;22;14" dur="1.5s" repeatCount="indefinite" />
                              </circle>
                            )}
                            <circle cx={s.x} cy={s.y} r={isConnected ? 8 : 6} fill={isConnected ? 'var(--accent-gold)' : 'rgba(255,255,255,0.4)'} />
                            <circle cx={s.x} cy={s.y} r="2.5" fill="#FFFFFF" />
                            <text x={s.x + 10} y={s.y - 8} fill={isConnected ? 'var(--accent-gold)' : '#A8B8CC'} fontSize="10" fontWeight="700">
                              {s.label}
                            </text>
                          </g>
                        );
                      })}
                    </svg>

                    <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap' }}>
                      <span style={{ fontSize: '0.76rem', color: isTracingComplete ? '#5BE0E5' : 'var(--accent-gold)', fontWeight: 700, background: 'rgba(7, 14, 23, 0.9)', padding: '5px 14px', borderRadius: '12px', border: '1px solid rgba(244,196,48,0.3)' }}>
                        {isTracingComplete ? '✨ Canis Major Pattern Complete!' : `👆 Tap Star ${connectedTrace.length + 1} (${tracingStars[connectedTrace.length]?.label})`}
                      </span>
                    </div>
                  </div>

                  {/* Right: Progress & Controls */}
                  <div style={{ padding: '0.5rem 0' }}>
                    <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', fontWeight: 700, margin: '0 0 0.5rem' }}>
                      Lubdaka (Sirius) Star Tracer
                    </h3>

                    <p style={{ fontSize: '0.9rem', color: '#DCE3EC', lineHeight: 1.6, margin: '0 0 1.25rem' }}>
                      Connect the principal stars around Sirius to verify how ancient navigators oriented south towards the equator.
                    </p>

                    <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '14px 16px', marginBottom: '1.25rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem', marginBottom: '8px' }}>
                        <span style={{ color: '#A8B8CC' }}>Completion Progress</span>
                        <strong style={{ color: 'var(--accent-gold)' }}>{connectedTrace.length} / {tracingStars.length} Stars</strong>
                      </div>
                      <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{ width: `${(connectedTrace.length / tracingStars.length) * 100}%`, height: '100%', background: 'var(--accent-gold)', transition: 'width 0.3s ease' }} />
                      </div>
                    </div>

                    <button
                      onClick={resetTracing}
                      style={{
                        padding: '8px 20px',
                        borderRadius: '16px',
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        color: '#DCE3EC',
                        fontSize: '0.84rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <RotateCcw size={14} />
                      <span>Reset Tracing</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* =================================================================
              CARD 4: HERITAGE BADGE ACCREDITATION & QUIZ
              ================================================================= */}
          <div className={`preview-accordion-card ${expandedCard === 'feedback' ? 'expanded' : 'collapsed'}`}>
            <div
              className="preview-accordion-header"
              onClick={() => setExpandedCard('feedback')}
            >
              <div className="preview-accordion-header-left">
                <div className="preview-accordion-icon">
                  <Award size={20} color="#5BE0E5" />
                </div>
                <div className="preview-accordion-title-wrap">
                  <h3 className="preview-accordion-title">
                    4. Heritage Badges & Sky Quiz Station
                  </h3>
                  <span className="preview-accordion-subtitle">
                    Museum Certification & Cultural Astronomy Accreditation
                  </span>
                </div>
              </div>

              <div className="preview-accordion-header-right">
                {expandedCard === 'feedback' ? (
                  <span className="preview-status-active">
                    ● ACTIVE
                  </span>
                ) : (
                  <span className="preview-status-collapsed">
                    <span>Expand Module</span>
                    <ChevronDown size={14} />
                  </span>
                )}
              </div>
            </div>

            {expandedCard === 'feedback' && (
              <div className="preview-accordion-body">
                <div className="preview-accordion-grid">
                  {/* Left: Badge Showcase Card */}
                  <div className="preview-badge-card">
                    <div>
                      <div className="preview-badge-icon">
                        {activeBadgeData.icon}
                      </div>
                      <h4 style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.25rem)', color: 'var(--accent-gold)', fontWeight: 800, margin: '0 0 0.4rem' }}>
                        {activeBadgeData.title}
                      </h4>
                      <span style={{ fontSize: '0.78rem', color: '#5BE0E5', background: 'rgba(91,224,229,0.12)', padding: '4px 14px', borderRadius: '12px', display: 'inline-block', marginBottom: '1rem', fontWeight: 600 }}>
                        {activeBadgeData.level}
                      </span>
                      <p style={{ fontSize: '0.88rem', color: '#DCE3EC', lineHeight: 1.65, margin: '0 0 1.25rem' }}>
                        {activeBadgeData.description}
                      </p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
                      {Object.values(badges).map((b) => (
                        <button
                          key={b.id}
                          onClick={() => {
                            setSelectedBadge(b.id);
                            setQuizAnswer(null);
                          }}
                          style={{
                            padding: '6px 12px',
                            borderRadius: '12px',
                            border: selectedBadge === b.id ? '1px solid var(--accent-gold)' : '1px solid rgba(255,255,255,0.15)',
                            background: selectedBadge === b.id ? 'rgba(244,196,48,0.2)' : 'rgba(255,255,255,0.05)',
                            color: selectedBadge === b.id ? 'var(--accent-gold)' : '#DCE3EC',
                            fontSize: '0.76rem',
                            fontWeight: 600,
                            cursor: 'pointer'
                          }}
                        >
                          {b.icon} {b.title.split(' ')[0]}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Right: Interactive Mini-Quiz */}
                  <div className="preview-quiz-card">
                    <div>
                      <div style={{ fontSize: '0.76rem', color: 'var(--accent-gold)', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '8px' }}>
                        TEST YOUR SKY KNOWLEDGE:
                      </div>

                      <h4 style={{ fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', color: '#FFFFFF', fontWeight: 600, margin: '0 0 1.25rem', lineHeight: 1.55 }}>
                        "Which constellation rising in the eastern sky at dusk signaled the ancient Maha harvest in Sri Lanka?"
                      </h4>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {[
                          { key: 'A', text: 'Trishanku (Southern Cross)', correct: false },
                          { key: 'B', text: 'Mriga / Three Kings (Orion)', correct: true },
                          { key: 'C', text: 'Vrishchika (Scorpius)', correct: false }
                        ].map((opt) => {
                          const isChosen = quizAnswer === opt.key;
                          let btnBg = 'rgba(255,255,255,0.04)';
                          let btnBorder = 'rgba(255,255,255,0.15)';
                          let btnColor = '#DCE3EC';

                          if (quizAnswer) {
                            if (opt.correct) {
                              btnBg = 'rgba(91,224,229,0.2)';
                              btnBorder = '#5BE0E5';
                              btnColor = '#5BE0E5';
                            } else if (isChosen && !opt.correct) {
                              btnBg = 'rgba(255,90,90,0.2)';
                              btnBorder = '#FF6B6B';
                              btnColor = '#FF6B6B';
                            }
                          }

                          return (
                            <button
                              key={opt.key}
                              onClick={() => setQuizAnswer(opt.key)}
                              style={{
                                padding: 'clamp(10px, 2vw, 12px) clamp(12px, 2.5vw, 18px)',
                                borderRadius: '12px',
                                background: btnBg,
                                border: `1px solid ${btnBorder}`,
                                color: btnColor,
                                fontSize: 'clamp(0.82rem, 1.8vw, 0.88rem)',
                                fontWeight: 600,
                                textAlign: 'left',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: '8px',
                                width: '100%',
                                wordBreak: 'break-word'
                              }}
                            >
                              <span><strong>{opt.key}.</strong> {opt.text}</span>
                              {quizAnswer && opt.correct && <CheckCircle size={15} color="#5BE0E5" style={{ flexShrink: 0 }} />}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {quizAnswer && (
                      <div style={{ marginTop: '1rem', padding: '10px 14px', borderRadius: '10px', background: quizAnswer === 'B' ? 'rgba(91,224,229,0.15)' : 'rgba(255,90,90,0.1)', border: quizAnswer === 'B' ? '1px solid #5BE0E5' : '1px solid #FF6B6B' }}>
                        <span style={{ fontSize: '0.82rem', color: quizAnswer === 'B' ? '#5BE0E5' : '#FF6B6B', fontWeight: 600 }}>
                          {quizAnswer === 'B'
                            ? '🎉 Correct! Orion (Mriga) directly calibrated the royal Maha agricultural calendar.'
                            : 'Try again! Orion (Mriga) is the key marker for the Maha harvest season.'}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Unified Bottom Note */}
        <div style={{ maxWidth: '820px', margin: '2rem auto 0', textAlign: 'center' }}>
          <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            The <strong style={{ color: 'var(--accent-gold)' }}>Unity Kiosk Suite</strong> delivers an active, hands-on museum experience — transforming ancient Sri Lankan celestial lore into tactile discovery for modern young explorers.
          </p>
        </div>
      </div>
    </section>
  );
}
