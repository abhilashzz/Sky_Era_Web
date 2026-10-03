import React from 'react';
import { Eye, Hand, PenTool, BookOpen } from 'lucide-react';

export default function Impact() {
  const impactPillars = [
    {
      word: 'SEE',
      icon: <Eye size={22} color="var(--accent-gold)" />,
      accentColor: 'var(--accent-gold)',
      sub: 'Discover historical skies.',
      desc: 'Look beyond modern light pollution into ancestral horizons.'
    },
    {
      word: 'INTERACT',
      icon: <Hand size={22} color="#5BE0E5" />,
      accentColor: '#5BE0E5',
      sub: 'Explore stars through touch.',
      desc: 'Shift from passive observation into tactile discovery.'
    },
    {
      word: 'CREATE',
      icon: <PenTool size={22} color="var(--accent-gold)" />,
      accentColor: 'var(--accent-gold)',
      sub: 'Reconstruct star patterns.',
      desc: 'Trace connecting geometries with real-time feedback.'
    },
    {
      word: 'UNDERSTAND',
      icon: <BookOpen size={22} color="#5BE0E5" />,
      accentColor: '#5BE0E5',
      sub: 'Turn curiosity into learning.',
      desc: 'Transform folklore and astronomy into lasting knowledge.'
    }
  ];

  return (
    <section className="section-wrapper" id="impact">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto' }}>
          <h2 className="section-heading" style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.8)' }}>
            Four Dimensions of Discovery.
          </h2>
          <p style={{ marginTop: '0.75rem', fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Transforming cultural observation into an engaging, multi-sensory educational journey for young minds.
          </p>
        </div>

        {/* Beautiful, High-End Impact Cards Grid */}
        <div className="impact-grid">
          {impactPillars.map((item, idx) => (
            <div key={idx} className="impact-word-card">
              {/* Top Subtle Gradient Accent Line */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: `linear-gradient(90deg, transparent, ${item.accentColor}, transparent)`,
                  opacity: 0.75
                }}
              />

              {/* Card Icon */}
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}
              >
                {item.icon}
              </div>

              {/* Main Word Title (Guaranteed single line, never breaks words) */}
              <div className="impact-word">
                {item.word}
              </div>

              {/* Subtitle */}
              <div className="impact-sub">
                {item.sub}
              </div>

              {/* Description */}
              <p style={{ margin: '0.5rem 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
