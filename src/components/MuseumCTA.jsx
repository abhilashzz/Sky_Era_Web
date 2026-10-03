import React from 'react';
import { Landmark, Compass, Sparkles, Building2, School, Globe, ArrowRight } from 'lucide-react';

export default function MuseumCTA({ onOpenDemoModal }) {
  const environments = [
    { title: 'Museums', desc: 'Enhance historical and cultural wings with interactive celestial kiosks.', icon: <Landmark size={20} /> },
    { title: 'Science Centres', desc: 'Introduce hands-on astrophysics and indigenous observational science.', icon: <Compass size={20} /> },
    { title: 'Planetariums', desc: 'Complement dome projection shows with tactile pre-show and post-show kiosks.', icon: <Globe size={20} /> },
    { title: 'Educational Exhibitions', desc: 'Pop-up interactive stations for public science festivals and heritage expos.', icon: <Sparkles size={20} /> },
    { title: 'School Learning Spaces', desc: 'Interactive classroom discovery centres supporting STEM and history curricula.', icon: <School size={20} /> },
    { title: 'Cultural Centres', desc: 'Preserve and communicate oral astronomy traditions through modern digital technology.', icon: <Building2 size={20} /> }
  ];

  return (
    <section className="section-wrapper" id="museum-cta">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto' }}>

          <h2 className="section-heading">
            Bring Sky Era <span className="text-gradient-gold">to Your Space.</span>
          </h2>
          <p style={{ margin: '1.25rem auto 0', fontSize: '1.1rem' }}>
            Sky Era is an interactive celestial kiosk and learning experience recommended for museums, science centres, schools, and cultural institutions.
          </p>
        </div>

        {/* Potential Environments Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.5rem', marginTop: '3.5rem' }}>
          {environments.map((env, idx) => (
            <div
              key={idx}
              style={{
                background: 'rgba(6, 22, 49, 0.45)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '1.75rem',
                transition: 'all 0.25s'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent-gold)', marginBottom: '0.75rem' }}>
                {env.icon}
                <h3 style={{ fontSize: '1.2rem', color: '#FFFFFF' }}>{env.title}</h3>
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', textAlign: 'left', textWrap: 'pretty' }}>
                {env.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Dual CTA Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', marginTop: '3.5rem', flexWrap: 'wrap' }}>
          <button
            className="btn btn-primary"
            onClick={onOpenDemoModal}
            id="museum-cta-discuss-btn"
          >
            <span>Discuss an Installation</span>
            <ArrowRight size={16} />
          </button>

          <button
            className="btn btn-secondary"
            onClick={onOpenDemoModal}
            id="museum-cta-request-btn"
          >
            <span>Request a Demo</span>
          </button>
        </div>
      </div>
    </section>
  );
}
