import React, { useState } from 'react';
import { EyeOff, FileText, Lock, HelpCircle, AlertCircle, Compass, Sparkles, Star, PenTool, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ProblemTransformation() {
  const [activeTab, setActiveTab] = useState('both'); // 'both', 'traditional', 'skyera'

  const traditionalPoints = [
    { title: 'Static Labels', desc: 'Dense text plaques that younger visitors often pass without reading.', icon: <FileText size={18} /> },
    { title: 'Limited Interaction', desc: 'Museum exhibits sealed behind glass with no tactile touchpoints.', icon: <Lock size={18} /> },
    { title: 'Passive Observation', desc: 'Looking without doing leads to low knowledge retention in children.', icon: <EyeOff size={18} /> },
    { title: 'Difficult Star Patterns', desc: 'Abstract astronomical charts that feel disconnected from real skies.', icon: <HelpCircle size={18} /> },
    { title: 'Minimal Feedback', desc: 'No validation of whether a child understood the constellations shown.', icon: <AlertCircle size={18} /> }
  ];

  const skyeraPoints = [
    { title: 'Explore', desc: 'Move fluidly across historical skies and watch celestial horizons shift.', icon: <Compass size={18} /> },
    { title: 'Interact', desc: 'Direct touch responsiveness built specifically for museum visitors.', icon: <Sparkles size={18} /> },
    { title: 'Discover', desc: 'Zoom into stars and unlock indigenous Sri Lankan celestial lore.', icon: <Star size={18} /> },
    { title: 'Create', desc: 'Draw and reconstruct star lines by actively connecting celestial nodes.', icon: <PenTool size={18} /> },
    { title: 'Learn', desc: 'Instant positive feedback, gentle guidance, and structured retries.', icon: <CheckCircle2 size={18} /> }
  ];

  return (
    <section className="section-wrapper transformation-section" id="transformation">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto' }}>

          <h2 className="section-heading">
            From Passive Displays <span className="text-gradient-gold">to Active Discovery.</span>
          </h2>
          <p style={{ margin: '1.25rem auto 0' }}>
            Traditional exhibitions often display the stars as distant, static artifacts. Sky Era invites visitors into the sky itself, turning curiosity into hands-on creation.
          </p>

          {/* Quick interactive filter */}
          <div style={{ display: 'inline-flex', gap: '8px', background: 'rgba(6,22,49,0.7)', padding: '4px', borderRadius: '30px', marginTop: '2rem', border: '1px solid rgba(255,255,255,0.08)' }}>
            <button
              onClick={() => setActiveTab('both')}
              style={{
                padding: '6px 16px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: activeTab === 'both' ? '#020817' : '#98A5B8',
                background: activeTab === 'both' ? '#D6A85F' : 'transparent',
                transition: 'all 0.2s'
              }}
            >
              Side-by-Side View
            </button>
            <button
              onClick={() => setActiveTab('traditional')}
              style={{
                padding: '6px 16px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: activeTab === 'traditional' ? '#FFFFFF' : '#98A5B8',
                background: activeTab === 'traditional' ? '#0B2D63' : 'transparent',
                transition: 'all 0.2s'
              }}
            >
              Traditional
            </button>
            <button
              onClick={() => setActiveTab('skyera')}
              style={{
                padding: '6px 16px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: activeTab === 'skyera' ? '#020817' : '#98A5B8',
                background: activeTab === 'skyera' ? '#D6A85F' : 'transparent',
                transition: 'all 0.2s'
              }}
            >
              Sky Era
            </button>
          </div>
        </div>

        {/* Side-by-Side Comparison Grid */}
        <div className="transformation-grid">
          {/* Traditional Experience (Muted) */}
          {(activeTab === 'both' || activeTab === 'traditional') && (
            <div className="transformation-col col-traditional">
              <div>
                <span className="col-badge">CONVENTIONAL APPROACH</span>
                <h3>Traditional Experience</h3>
                <p style={{ color: '#718096', fontSize: '0.98rem' }}>
                  Static museum boards present complex astronomical concepts through dense text panels and non-interactive glass vitrines.
                </p>

                <ul className="transformation-list">
                  {traditionalPoints.map((pt, idx) => (
                    <li key={idx}>
                      <span style={{ color: '#A0AEC0' }}>{pt.icon}</span>
                      <div>
                        <strong style={{ display: 'block', color: '#CBD5E0' }}>{pt.title}</strong>
                        <span style={{ fontSize: '0.88rem' }}>{pt.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Sky Era Experience (Illuminated) */}
          {(activeTab === 'both' || activeTab === 'skyera') && (
            <div className="transformation-col col-skyera">
              <div>
                <span className="col-badge">SKY ERA PARADIGM</span>
                <h3>Sky Era Experience</h3>
                <p style={{ color: '#D6A85F', fontSize: '0.98rem' }}>
                  Interactive kiosks empower visitors to touch the stars, reconstruct constellations, and uncover Sri Lanka's heritage actively.
                </p>

                <ul className="transformation-list">
                  {skyeraPoints.map((pt, idx) => (
                    <li key={idx}>
                      <span style={{ color: '#D6A85F' }}>{pt.icon}</span>
                      <div>
                        <strong style={{ display: 'block', color: '#FFFFFF' }}>{pt.title}</strong>
                        <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>{pt.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
