import React, { useState } from 'react';
import { Sparkles, Star, RotateCcw, CheckCircle2, Eye, EyeOff, Tag } from 'lucide-react';

export default function StarExplorer() {
  const [activeConstellation, setActiveConstellation] = useState('mriga');
  const [selectedStar, setSelectedStar] = useState(null);
  const [userDrawnLines, setUserDrawnLines] = useState([]); // array of [fromId, toId]
  const [showHint, setShowHint] = useState(false);
  const [showFigure, setShowFigure] = useState(false); // Can manually toggle or auto-reveals on completion
  const [showLabels, setShowLabels] = useState(true);

  const constellationData = {
    mriga: {
      name: 'Mriga (Orion / The Celestial Hunter)',
      figureName: 'Orion the Celestial Hunter',
      englishSubtitle: 'Ancient Agrarian Harvest Marker',
      eraLore: 'Prominently visible during Sri Lankan dry harvest months. In traditional agrarian folklore, the three central belt stars served as an astronomical calendar for village reservoir irrigation.',
      stars: [
        { id: 0, x: 260, y: 70, name: 'Betelgeuse', color: 'var(--accent-gold)', radius: 7, labelX: 244, labelY: 62, anchor: 'end' },
        { id: 1, x: 380, y: 60, name: 'Bellatrix', color: '#5BE0E5', radius: 6, labelX: 396, labelY: 52, anchor: 'start' },
        { id: 2, x: 300, y: 160, name: 'Alnitak', color: '#FFFFFF', radius: 5, labelX: 300, labelY: 180, anchor: 'middle' },
        { id: 3, x: 320, y: 160, name: 'Alnilam', color: 'var(--accent-gold)', radius: 5.5, labelX: 320, labelY: 180, anchor: 'middle' },
        { id: 4, x: 340, y: 160, name: 'Mintaka', color: '#FFFFFF', radius: 5, labelX: 340, labelY: 180, anchor: 'middle' },
        { id: 5, x: 270, y: 260, name: 'Saiph', color: '#5BE0E5', radius: 6, labelX: 254, labelY: 275, anchor: 'end' },
        { id: 6, x: 390, y: 250, name: 'Rigel', color: '#FFFFFF', radius: 7.5, labelX: 406, labelY: 265, anchor: 'start' }
      ],
      targetConnections: [
        [0, 1], // Betelgeuse to Bellatrix (Shoulders)
        [0, 2], // Betelgeuse to Alnitak (Right Flank)
        [1, 4], // Bellatrix to Mintaka (Left Flank)
        [2, 3], // Alnitak to Alnilam (Belt)
        [3, 4], // Alnilam to Mintaka (Belt)
        [2, 5], // Alnitak to Saiph (Right Leg)
        [4, 6]  // Mintaka to Rigel (Left Leg)
      ]
    },
    saptarshi: {
      name: 'Saptarshi (Ursa Major / The Seven Sages)',
      figureName: 'The Great Bear / Seven Sages',
      englishSubtitle: 'Ancient Northern Navigational Beacon',
      eraLore: 'Positioned above Sri Lanka’s northern horizon, these seven bright stars were used by coastal voyagers and fishermen for centuries to calibrate their compass bearings across the Indian Ocean.',
      stars: [
        { id: 0, x: 180, y: 100, name: 'Dubhe', color: 'var(--accent-gold)', radius: 7, labelX: 166, labelY: 92, anchor: 'end' },
        { id: 1, x: 250, y: 110, name: 'Merak', color: '#5BE0E5', radius: 6, labelX: 236, labelY: 126, anchor: 'end' },
        { id: 2, x: 290, y: 160, name: 'Phecda', color: '#FFFFFF', radius: 6, labelX: 304, labelY: 174, anchor: 'start' },
        { id: 3, x: 220, y: 150, name: 'Megrez', color: '#FFFFFF', radius: 5.5, labelX: 206, labelY: 142, anchor: 'end' },
        { id: 4, x: 360, y: 170, name: 'Alioth', color: 'var(--accent-gold)', radius: 6.5, labelX: 360, labelY: 155, anchor: 'middle' },
        { id: 5, x: 420, y: 140, name: 'Mizar', color: '#5BE0E5', radius: 6, labelX: 420, labelY: 125, anchor: 'middle' },
        { id: 6, x: 480, y: 160, name: 'Alkaid', color: '#FFFFFF', radius: 7, labelX: 494, labelY: 174, anchor: 'start' }
      ],
      targetConnections: [
        [0, 1], [1, 2], [2, 3], [3, 0], [3, 4], [4, 5], [5, 6]
      ]
    },
    vrishchika: {
      name: 'Vrishchika (Scorpius / The Celestial Scorpion)',
      figureName: 'The Celestial Scorpion',
      englishSubtitle: 'Southwest Monsoon Sky Marker',
      eraLore: 'With reddish supergiant Antares at its heart, this pattern arches high across the southern sky in mid-year, historically heralding the arrival of the southwest monsoon.',
      stars: [
        { id: 0, x: 200, y: 60, name: 'Graffias', color: '#5BE0E5', radius: 6, labelX: 186, labelY: 55, anchor: 'end' },
        { id: 1, x: 220, y: 90, name: 'Dschubba', color: '#FFFFFF', radius: 6, labelX: 204, labelY: 96, anchor: 'end' },
        { id: 2, x: 250, y: 140, name: 'Antares (Heart)', color: 'var(--accent-gold)', radius: 8, labelX: 268, labelY: 144, anchor: 'start' },
        { id: 3, x: 280, y: 200, name: 'Larawag', color: '#FFFFFF', radius: 6, labelX: 264, labelY: 208, anchor: 'end' },
        { id: 4, x: 330, y: 240, name: 'Sargas', color: '#5BE0E5', radius: 6.5, labelX: 330, labelY: 260, anchor: 'middle' },
        { id: 5, x: 380, y: 220, name: 'Shaula (Stinger)', color: 'var(--accent-gold)', radius: 7, labelX: 396, labelY: 224, anchor: 'start' }
      ],
      targetConnections: [
        [0, 1], [1, 2], [2, 3], [3, 4], [4, 5]
      ]
    },
    krittika: {
      name: 'Krittika (Pleiades / The Seven Sisters)',
      figureName: 'The Seven Sisters / Krittika Veil',
      englishSubtitle: 'Auspicious New Year Calendar Cluster',
      eraLore: 'Visible as a sparkling cluster above central hills, Krittika’s transit across the zenith marked agricultural transition and harvest preparations leading into the traditional New Year.',
      stars: [
        { id: 0, x: 280, y: 120, name: 'Alcyone', color: '#5BE0E5', radius: 7, labelX: 280, labelY: 104, anchor: 'middle' },
        { id: 1, x: 310, y: 110, name: 'Atlas', color: '#FFFFFF', radius: 6, labelX: 324, labelY: 104, anchor: 'start' },
        { id: 2, x: 260, y: 145, name: 'Electra', color: 'var(--accent-gold)', radius: 6.5, labelX: 244, labelY: 155, anchor: 'end' },
        { id: 3, x: 320, y: 140, name: 'Maia', color: '#FFFFFF', radius: 5.5, labelX: 334, labelY: 148, anchor: 'start' },
        { id: 4, x: 345, y: 125, name: 'Merope', color: '#5BE0E5', radius: 5.5, labelX: 360, labelY: 128, anchor: 'start' },
        { id: 5, x: 295, y: 160, name: 'Taygeta', color: '#FFFFFF', radius: 5.5, labelX: 295, labelY: 178, anchor: 'middle' }
      ],
      targetConnections: [
        [0, 1], [0, 2], [1, 3], [3, 4], [2, 5], [0, 3]
      ]
    }
  };

  const current = constellationData[activeConstellation];

  // Switch constellation and reset user drawn lines to empty
  const handleSelectConstellation = (key) => {
    setActiveConstellation(key);
    setUserDrawnLines([]);
    setSelectedStar(null);
    setShowFigure(false);
  };

  // Interactive Drawing: User clicks Star A, then clicks Star B to draw a line
  const handleStarClick = (starId) => {
    if (selectedStar === null) {
      setSelectedStar(starId);
    } else if (selectedStar === starId) {
      setSelectedStar(null); // Deselect if same star clicked
    } else {
      // Check if line already exists between selectedStar and starId
      const exists = userDrawnLines.some(
        ([a, b]) => (a === selectedStar && b === starId) || (a === starId && b === selectedStar)
      );

      if (!exists) {
        setUserDrawnLines([...userDrawnLines, [selectedStar, starId]]);
      }
      setSelectedStar(starId); // Keep second star selected so user can chain draw
    }
  };

  const handleResetDrawing = () => {
    setUserDrawnLines([]);
    setSelectedStar(null);
    setShowFigure(false);
  };

  const totalLinesNeeded = current.targetConnections.length;
  const linesDrawnCount = userDrawnLines.length;
  const isComplete = linesDrawnCount >= totalLinesNeeded;
  const shouldRevealFigure = isComplete || showFigure;

  return (
    <section className="section-wrapper" id="star-explorer">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto' }}>
          <h2 className="section-heading">
            Draw the Night Sky. <span className="text-gradient-gold">Connect the Stars Yourself.</span>
          </h2>
          <p style={{ margin: '1rem auto 0', fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Touch or click any glowing star node, then click the next star to draw your own constellation lines. When you finish drawing, the authentic celestial figure awakens!
          </p>
        </div>

        {/* Constellation Selector Bar */}
        <div className="constellation-picker-bar">
          {Object.keys(constellationData).map((key) => (
            <button
              key={key}
              className={`constellation-btn ${activeConstellation === key ? 'active' : ''}`}
              onClick={() => handleSelectConstellation(key)}
            >
              <span>{constellationData[key].name.split(' (')[0]}</span>
            </button>
          ))}
        </div>

        {/* Drawing Control & Progress Toolbar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '860px', margin: '1.75rem auto 0', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>
              Drawing Progress: <strong style={{ color: 'var(--accent-gold)' }}>{linesDrawnCount} / {totalLinesNeeded}</strong> lines
            </span>

            {isComplete ? (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: 'var(--accent-gold)', fontWeight: 700 }}>
                <Sparkles size={14} /> Figure Awakened!
              </span>
            ) : (
              <span style={{ fontSize: '0.8rem', color: '#A8B8CC' }}>
                {selectedStar === null
                  ? '• Click any star to start'
                  : `• Connect to next star`}
              </span>
            )}
          </div>

          {/* Action Toolbar */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {/* Figure Reveal Toggle Button */}
            <button
              onClick={() => setShowFigure(!showFigure)}
              className="btn btn-secondary"
              style={{
                padding: '6px 14px',
                fontSize: '0.8rem',
                borderRadius: '20px',
                color: shouldRevealFigure ? 'var(--accent-gold)' : '#DCE3EC',
                border: shouldRevealFigure ? '1px solid var(--accent-gold)' : '1px solid rgba(255,255,255,0.15)'
              }}
              title="Reveal mythical constellation illustration"
            >
              <Sparkles size={14} />
              <span>{shouldRevealFigure ? `Hide ${current.figureName}` : `Reveal ${current.figureName}`}</span>
            </button>

            {/* Star Names Toggle */}
            <button
              onClick={() => setShowLabels(!showLabels)}
              className="btn btn-secondary"
              style={{ padding: '6px 12px', fontSize: '0.8rem', borderRadius: '20px' }}
              title="Toggle star name text"
            >
              <Tag size={13} />
              <span>{showLabels ? 'Hide Names' : 'Show Names'}</span>
            </button>

            {/* Guide Lines Toggle */}
            <button
              onClick={() => setShowHint(!showHint)}
              className="btn btn-secondary"
              style={{ padding: '6px 12px', fontSize: '0.8rem', borderRadius: '20px' }}
            >
              {showHint ? <EyeOff size={13} /> : <Eye size={13} />}
              <span>{showHint ? 'Hide Guide' : 'Show Guide'}</span>
            </button>

            {/* Reset Button */}
            <button
              onClick={handleResetDrawing}
              className="btn btn-secondary"
              style={{ padding: '6px 12px', fontSize: '0.8rem', borderRadius: '20px' }}
              title="Clear all lines and draw again"
            >
              <RotateCcw size={13} />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Interactive Sky Canvas Box */}
        <div className="star-explorer-canvas-box" style={{ maxWidth: '860px', margin: '1.25rem auto 0' }}>
          <svg viewBox="0 0 650 340" style={{ width: '100%', height: '100%', minHeight: '340px' }}>
            <defs>
              {/* Ethereal Glow Gradients for Figure Reveal */}
              <radialGradient id="orionAura" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(244,196,48,0.22)" />
                <stop offset="50%" stopColor="rgba(91,224,229,0.08)" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>

              <radialGradient id="m42Nebula" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(255,110,210,0.5)" />
                <stop offset="60%" stopColor="rgba(91,224,229,0.25)" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>

            {/* Subtle Celestial Coordinate Axes */}
            <circle cx="325" cy="170" r="140" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="3 3" fill="none" />
            <line x1="50" y1="170" x2="600" y2="170" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
            <line x1="325" y1="20" x2="325" y2="320" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

            {/* =================================================================
                AUTHENTIC CELESTIAL FIGURE REVEAL LAYER
                Appears when constellation is drawn OR when toggled!
                ================================================================= */}
            
            {/* 1. ORION (MRIGA) CELESTIAL HUNTER REVEAL */}
            {activeConstellation === 'mriga' && (
              <g style={{ opacity: shouldRevealFigure ? 1 : 0, transition: 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1)', pointerEvents: 'none' }}>
                {/* Background Ethereal Aura */}
                <ellipse cx="325" cy="160" rx="170" ry="145" fill="url(#orionAura)" filter="blur(16px)" />

                {/* M42 Great Orion Nebula under belt */}
                <ellipse cx="320" cy="195" rx="16" ry="10" fill="url(#m42Nebula)" filter="blur(5px)" />

                {/* Celestial Head & Starlight Helmet */}
                <path d="M 312 36 C 312 20, 328 20, 328 36 Z" stroke="rgba(244,196,48,0.85)" strokeWidth="1.6" fill="rgba(244,196,48,0.12)" />
                <path d="M 316 22 L 320 12 L 324 22" stroke="rgba(244,196,48,0.9)" strokeWidth="1.5" fill="none" />
                <circle cx="320" cy="12" r="3" fill="#FFFFFF" />
                <line x1="316" y1="36" x2="260" y2="70" stroke="rgba(244,196,48,0.35)" strokeWidth="1.2" strokeDasharray="3 3" />
                <line x1="324" y1="36" x2="380" y2="60" stroke="rgba(244,196,48,0.35)" strokeWidth="1.2" strokeDasharray="3 3" />

                {/* Raised Right Arm holding Celestial Club */}
                <path d="M 260 70 L 225 45 L 205 20" stroke="rgba(244,196,48,0.8)" strokeWidth="2" fill="none" />
                <path d="M 205 20 L 190 10 L 200 2 L 215 10 Z" stroke="var(--accent-gold)" strokeWidth="1.8" fill="rgba(244,196,48,0.25)" />
                <circle cx="195" cy="6" r="2.5" fill="#FFFFFF" />

                {/* Left Arm holding Celestial Shield / Bow */}
                <path d="M 380 60 L 420 70 L 440 85" stroke="rgba(91,224,229,0.7)" strokeWidth="1.8" fill="none" />
                <path d="M 445 35 C 470 85, 470 145, 445 195" stroke="rgba(91,224,229,0.85)" strokeWidth="2" strokeDasharray="4 2" fill="none" />
                <circle cx="447" cy="45" r="2" fill="#5BE0E5" />
                <circle cx="463" cy="85" r="2.5" fill="#FFFFFF" />
                <circle cx="465" cy="115" r="2.5" fill="#5BE0E5" />
                <circle cx="463" cy="145" r="2.5" fill="#FFFFFF" />
                <circle cx="447" cy="185" r="2" fill="#5BE0E5" />

                {/* Torso & Warrior Armor */}
                <path d="M 260 70 Q 320 95 380 60 L 340 160 Q 320 165 300 160 Z" stroke="rgba(244,196,48,0.4)" strokeWidth="1.2" fill="rgba(244,196,48,0.06)" />

                {/* Hanging Sword Sheath */}
                <line x1="320" y1="168" x2="320" y2="215" stroke="rgba(244,196,48,0.75)" strokeWidth="2" />
                <circle cx="320" cy="182" r="2" fill="#5BE0E5" />
                <circle cx="320" cy="195" r="3" fill="#FFFFFF" />
                <circle cx="320" cy="208" r="2" fill="#5BE0E5" />

                {/* Legs & Warrior Greaves */}
                <path d="M 270 260 L 255 285 L 280 285 Z" stroke="rgba(91,224,229,0.7)" strokeWidth="1.5" fill="rgba(91,224,229,0.15)" />
                <path d="M 390 250 L 415 272 L 390 277 Z" stroke="rgba(244,196,48,0.8)" strokeWidth="1.5" fill="rgba(244,196,48,0.15)" />

                {/* Announcement Header */}
                <text x="325" y="322" fill="var(--accent-gold)" fontSize="11" fontWeight="700" letterSpacing="0.1em" textAnchor="middle">
                  ORION (MRIGA) CELESTIAL HUNTER REVEALED
                </text>
              </g>
            )}

            {/* 2. SAPTARSHI (URSA MAJOR) CELESTIAL BEAR REVEAL */}
            {activeConstellation === 'saptarshi' && (
              <g style={{ opacity: shouldRevealFigure ? 1 : 0, transition: 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1)', pointerEvents: 'none' }}>
                <ellipse cx="325" cy="140" rx="180" ry="100" fill="url(#orionAura)" filter="blur(20px)" />
                <path
                  d="M 140 90 Q 180 80 250 85 Q 350 95 480 160 Q 380 200 280 200 Q 200 190 140 130 Z"
                  stroke="rgba(244,196,48,0.6)"
                  strokeWidth="1.5"
                  strokeDasharray="4 2"
                  fill="rgba(244,196,48,0.05)"
                />
                <circle cx="140" cy="90" r="3" fill="#5BE0E5" />
                <text x="325" y="322" fill="var(--accent-gold)" fontSize="11" fontWeight="700" letterSpacing="0.1em" textAnchor="middle">
                  SAPTARSHI (GREAT BEAR) CELESTIAL FIGURE REVEALED
                </text>
              </g>
            )}

            {/* 3. VRISHCHIKA (SCORPIUS) CELESTIAL SCORPION REVEAL */}
            {activeConstellation === 'vrishchika' && (
              <g style={{ opacity: shouldRevealFigure ? 1 : 0, transition: 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1)', pointerEvents: 'none' }}>
                <ellipse cx="280" cy="160" rx="140" ry="120" fill="url(#orionAura)" filter="blur(20px)" />
                {/* Curved Claws */}
                <path d="M 200 60 C 170 40 150 70 170 90" stroke="rgba(91,224,229,0.7)" strokeWidth="1.8" fill="none" />
                <path d="M 220 90 C 230 40 260 50 250 80" stroke="rgba(91,224,229,0.7)" strokeWidth="1.8" fill="none" />
                {/* Arching Stinger */}
                <path d="M 330 240 Q 390 260 410 210 Q 400 170 380 220" stroke="rgba(244,196,48,0.8)" strokeWidth="2" fill="none" />
                <text x="325" y="322" fill="var(--accent-gold)" fontSize="11" fontWeight="700" letterSpacing="0.1em" textAnchor="middle">
                  VRISHCHIKA (CELESTIAL SCORPION) REVEALED
                </text>
              </g>
            )}

            {/* 4. KRITTIKA (PLEIADES) SEVEN SISTERS REVEAL */}
            {activeConstellation === 'krittika' && (
              <g style={{ opacity: shouldRevealFigure ? 1 : 0, transition: 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1)', pointerEvents: 'none' }}>
                <ellipse cx="300" cy="135" rx="100" ry="60" fill="rgba(91,224,229,0.25)" filter="blur(18px)" />
                <text x="325" y="322" fill="var(--accent-gold)" fontSize="11" fontWeight="700" letterSpacing="0.1em" textAnchor="middle">
                  KRITTIKA (SEVEN SISTERS VEIL) REVEALED
                </text>
              </g>
            )}

            {/* Faint Guide Lines (Only if user enables Show Guide) */}
            {showHint && current.targetConnections.map(([fromId, toId], i) => {
              const fromStar = current.stars.find(s => s.id === fromId);
              const toStar = current.stars.find(s => s.id === toId);
              if (!fromStar || !toStar) return null;
              return (
                <line
                  key={`hint-${i}`}
                  x1={fromStar.x}
                  y1={fromStar.y}
                  x2={toStar.x}
                  y2={toStar.y}
                  stroke="rgba(244, 196, 48, 0.3)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
              );
            })}

            {/* User-Drawn Lines (Starts at 0 lines!) */}
            {userDrawnLines.map(([fromId, toId], i) => {
              const fromStar = current.stars.find(s => s.id === fromId);
              const toStar = current.stars.find(s => s.id === toId);
              if (!fromStar || !toStar) return null;
              return (
                <line
                  key={`drawn-${i}`}
                  x1={fromStar.x}
                  y1={fromStar.y}
                  x2={toStar.x}
                  y2={toStar.y}
                  stroke="var(--accent-gold)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  filter="drop-shadow(0 0 6px rgba(244, 196, 48, 0.7))"
                />
              );
            })}

            {/* Active Drawing Selection Pulse */}
            {selectedStar !== null && (
              <circle
                cx={current.stars.find(s => s.id === selectedStar)?.x}
                cy={current.stars.find(s => s.id === selectedStar)?.y}
                r="18"
                stroke="var(--accent-gold)"
                strokeWidth="1.5"
                strokeDasharray="3 3"
                fill="none"
              >
                <animate attributeName="r" values="14;22;14" dur="1.5s" repeatCount="indefinite" />
              </circle>
            )}

            {/* Orion's Belt Single Clean Identifier (Prevents Text Collision!) */}
            {activeConstellation === 'mriga' && showLabels && (
              <text
                x="320"
                y="144"
                fill="var(--accent-gold)"
                fontSize="11"
                fontFamily="var(--font-heading)"
                fontWeight="700"
                textAnchor="middle"
                letterSpacing="0.04em"
              >
                Orion's Belt
              </text>
            )}

            {/* Clickable Star Nodes */}
            {current.stars.map((s) => {
              const isSelected = selectedStar === s.id;
              // Don't show individual belt star names unless hovered or for non-belt stars to avoid clutter
              const isBeltStar = activeConstellation === 'mriga' && (s.id === 2 || s.id === 3 || s.id === 4);

              return (
                <g
                  key={s.id}
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleStarClick(s.id)}
                >
                  {/* Outer pulse */}
                  <circle
                    cx={s.x}
                    cy={s.y}
                    r={isSelected ? 16 : 10}
                    fill="rgba(244, 196, 48, 0.2)"
                  />
                  {/* Star circle */}
                  <circle
                    cx={s.x}
                    cy={s.y}
                    r={isSelected ? s.radius + 2 : s.radius}
                    fill={s.color}
                    filter="drop-shadow(0 0 8px var(--accent-gold))"
                  />
                  {/* White star core */}
                  <circle cx={s.x} cy={s.y} r={s.radius * 0.4} fill="#FFFFFF" />

                  {/* Clean Star Name Label (Well spaced with ZERO overlapping text) */}
                  {showLabels && !isBeltStar && (
                    <text
                      x={s.labelX}
                      y={s.labelY}
                      fill="var(--text-primary)"
                      fontSize="11"
                      fontFamily="var(--font-heading)"
                      fontWeight="600"
                      textAnchor={s.anchor || 'start'}
                    >
                      {s.name}
                    </text>
                  )}

                  {/* Small staggered belt labels under belt */}
                  {showLabels && isBeltStar && (
                    <text
                      x={s.labelX}
                      y={s.labelY}
                      fill="#A8B8CC"
                      fontSize="9"
                      fontFamily="monospace"
                      textAnchor="middle"
                    >
                      {s.name}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>
        </div>

        {/* Constellation Details & Lore Panel */}
        <div
          className="glass-panel"
          style={{
            maxWidth: '860px',
            margin: '1.5rem auto 0',
            padding: '1.75rem 2rem',
            border: '1px solid var(--border-subtle)',
            background: 'var(--bg-surface)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h4 style={{ fontSize: '1.35rem', color: 'var(--text-primary)', marginBottom: '4px' }}>
                {current.name}
              </h4>
              <div style={{ fontSize: '0.82rem', color: 'var(--accent-gold)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                {current.englishSubtitle}
              </div>
            </div>

            {isComplete && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-gold)', fontSize: '0.88rem', fontWeight: 700 }}>
                <Sparkles size={16} />
                <span>Pattern Complete — {current.figureName} Awakened!</span>
              </div>
            )}
          </div>

          <p style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginTop: '0.75rem' }}>
            {current.eraLore}
          </p>

          <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            <span>Connect all stars to awaken the celestial figure • Tap Reveal anytime</span>
            <span style={{ color: 'var(--accent-gold)', fontWeight: 600 }}>Interactive Touch Kiosk Feature</span>
          </div>
        </div>
      </div>
    </section>
  );
}
