import React from 'react';

export default function HeritageTechnology() {
  return (
    <section className="section-wrapper heritage-tech-section" id="heritage-tech">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto' }}>

          <h2 className="section-heading">
            Where Heritage <span className="text-gradient-gold">Meets the Future.</span>
          </h2>
          <p style={{ margin: '1rem auto 0' }}>
            Sky Era brings Sri Lanka’s historical sky stories into an interactive digital environment designed for a new generation of museum visitors.
          </p>
        </div>

        {/* Split Transformation Showcase */}
        <div className="heritage-transformation-box">
          <div className="heritage-split-visual">
            {/* Left: Ancient Cultural Heritage */}
            <div className="heritage-stone-side">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--accent-gold)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', marginBottom: '1rem' }}>
                <span>HISTORICAL ASTRONOMY ARCHIVE</span>
              </div>
              <h3 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                Recorded in Cultural Stone
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7 }}>
                Centuries-old stone inscriptions, ancient astronomical rings, and monastic chronicles recorded celestial movements across the central highlands to calculate monsoon cycles and auspicious festivals.
              </p>
            </div>

            {/* Right: Digital Constellation Starlight Environment */}
            <div className="heritage-digital-side">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--accent-gold)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', marginBottom: '1rem' }}>
                <span>INTERACTIVE DIGITAL ENVIRONMENT</span>
              </div>
              <h3 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                Reborn in Digital Light
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7 }}>
                Sky Era translates these ancient coordinate records into responsive digital nodes, real-time touch drawing activities, and engaging museum kiosk experiences for young explorers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
