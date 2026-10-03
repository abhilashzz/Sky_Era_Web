import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export default function LearningLevels() {
  const [level, setLevel] = useState('beginner'); // 'beginner', 'intermediate', 'advanced'

  const levels = {
    beginner: {
      id: 'beginner',
      title: 'Follow the Stars',
      desc: 'Star points and visual guide lines help the learner recreate the pattern step by step. Ideal for younger children (ages 6–8) taking their first steps in celestial observation.',
      kioskPrompt: 'TOUCH THE GLOWING DOTTED PATH TO TRACE THE CONSTELLATION',
      showGuideLines: true,
      guideDash: '4 4',
      guideOpacity: 0.7,
      starsGlow: true
    },
    intermediate: {
      id: 'intermediate',
      title: 'Connect the Sky',
      desc: 'Only the star points remain visible, allowing learners to rebuild the pattern independently. Builds spatial intuition and constellation geometry for school-age students.',
      kioskPrompt: 'CONNECT THE STAR NODES IN SEQUENCE WITHOUT GUIDELINES',
      showGuideLines: false,
      guideDash: 'none',
      guideOpacity: 0,
      starsGlow: true
    },
    advanced: {
      id: 'advanced',
      title: 'Remember the Pattern',
      desc: 'The pattern is briefly shown and then hidden, encouraging observation and recall. Challenges older students, families, and enthusiastic museum visitors to test their memory.',
      kioskPrompt: 'RECALL THE PATTERN FROM MEMORY AFTER THE FLASH FADES',
      showGuideLines: false,
      guideDash: 'none',
      guideOpacity: 0,
      starsGlow: false
    }
  };

  const current = levels[level];

  return (
    <section className="section-wrapper" id="learning">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto' }}>

          <h2 className="section-heading">
            Built for Curiosity.
          </h2>
          <p style={{ margin: '1rem auto 0' }}>
            Sky Era turns observation into participation through star-pattern challenges designed for different levels of confidence.
          </p>

          {/* Interactive Difficulty Selector */}
          <div className="difficulty-selector-tabs">
            <button
              className={`diff-tab ${level === 'beginner' ? 'active' : ''}`}
              onClick={() => setLevel('beginner')}
            >
              BEGINNER
            </button>
            <button
              className={`diff-tab ${level === 'intermediate' ? 'active' : ''}`}
              onClick={() => setLevel('intermediate')}
            >
              INTERMEDIATE
            </button>
            <button
              className={`diff-tab ${level === 'advanced' ? 'active' : ''}`}
              onClick={() => setLevel('advanced')}
            >
              ADVANCED
            </button>
          </div>
        </div>

        {/* Dynamic Display Panel for Selected Difficulty */}
        <div className="difficulty-display-panel">
          {/* Left: Star Diagram morphing into selected difficulty state */}
          <div style={{ position: 'relative', width: '100%', aspectRatio: '1 / 1', maxHeight: '340px', background: '#01050F', borderRadius: '16px', border: '1px solid rgba(214,168,95,0.3)', padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg viewBox="0 0 300 300" style={{ width: '100%', height: '100%' }}>
              {/* Central reference ring */}
              <circle cx="150" cy="150" r="110" stroke="rgba(11,45,99,0.3)" strokeWidth="1" strokeDasharray="3 3" fill="none" />

              {/* Guide Lines (shown in Beginner mode) */}
              {current.showGuideLines && (
                <g stroke="#D6A85F" strokeWidth="2" strokeDasharray={current.guideDash} opacity={current.guideOpacity}>
                  <line x1="80" y1="90" x2="150" y2="50" />
                  <line x1="150" y1="50" x2="220" y2="90" />
                  <line x1="220" y1="90" x2="190" y2="210" />
                  <line x1="190" y1="210" x2="110" y2="210" />
                  <line x1="110" y1="210" x2="80" y2="90" />
                  <line x1="80" y1="90" x2="150" y2="140" />
                  <line x1="150" y1="140" x2="220" y2="90" />
                </g>
              )}

              {/* In intermediate or advanced, show faint user-drawn trace lines */}
              {level === 'intermediate' && (
                <g stroke="#5BE0E5" strokeWidth="2">
                  <line x1="80" y1="90" x2="150" y2="50" />
                  <line x1="150" y1="50" x2="220" y2="90" />
                </g>
              )}

              {/* Star Nodes */}
              {[
                { x: 80, y: 90, name: 'α' },
                { x: 150, y: 50, name: 'β' },
                { x: 220, y: 90, name: 'γ' },
                { x: 190, y: 210, name: 'δ' },
                { x: 110, y: 210, name: 'ε' },
                { x: 150, y: 140, name: 'ζ' }
              ].map((pt, i) => (
                <g key={i}>
                  {current.starsGlow && (
                    <circle cx={pt.x} cy={pt.y} r="12" fill="rgba(214,168,95,0.2)" />
                  )}
                  <circle cx={pt.x} cy={pt.y} r="5" fill="#D6A85F" filter="drop-shadow(0 0 6px #D6A85F)" />
                  <circle cx={pt.x} cy={pt.y} r="2" fill="#FFFFFF" />
                  <text x={pt.x + 8} y={pt.y - 8} fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="monospace">
                    {pt.name}
                  </text>
                </g>
              ))}
            </svg>

            {/* Level status overlay tag */}
            <div style={{ position: 'absolute', bottom: '12px', left: '12px', right: '12px', background: 'rgba(2,8,23,0.85)', padding: '6px 12px', borderRadius: '8px', fontSize: '0.72rem', color: '#D6A85F', border: '1px solid rgba(255,255,255,0.08)', textAlign: 'center' }}>
              {current.kioskPrompt}
            </div>
          </div>

          {/* Right: Detailed Description & Learning Objectives */}
          <div>
            <h3 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.4rem)', color: '#FFFFFF', marginBottom: '1rem' }}>
              {current.title}
            </h3>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              {current.desc}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#F5F8FC' }}>
                <CheckCircle size={16} color="#D6A85F" />
                <span>Encourages repeated play and self-paced mastery</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#F5F8FC' }}>
                <CheckCircle size={16} color="#D6A85F" />
                <span>Immediate positive reinforcement with no punitive scoring</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#F5F8FC' }}>
                <CheckCircle size={16} color="#D6A85F" />
                <span>Seamlessly adapts to school field trips and family visits</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
