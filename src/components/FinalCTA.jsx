import React from 'react';
import { Sparkles, ArrowRight, MessageSquare, Compass } from 'lucide-react';

export default function FinalCTA({ onOpenDemoModal }) {
  return (
    <section className="final-cta-section" id="final-cta">
      {/* Foreground Content */}
      <div className="final-cta-content">

        <h2 className="hero-heading" style={{ fontSize: 'clamp(2.75rem, 6.5vw, 5.5rem)', marginBottom: '1rem', textWrap: 'balance' }}>
          The Past Is Still <span className="text-gradient-gold">Above&nbsp;Us.</span>
        </h2>

        <p className="section-subheading" style={{ margin: '0 auto 2.5rem', maxWidth: '640px' }}>
          Experience the sky differently with Sky Era. Discover how interactive kiosks bring historical astronomy and star patterns to life for future generations.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          <button
            className="btn btn-primary"
            onClick={onOpenDemoModal}
            id="final-cta-request-btn"
          >
            <span>Request a Demo</span>
            <ArrowRight size={18} />
          </button>

          <button
            className="btn btn-secondary"
            onClick={onOpenDemoModal}
            id="final-cta-talk-btn"
          >
            <MessageSquare size={16} />
            <span>Talk to Our Team</span>
          </button>
        </div>

        <div style={{ fontSize: '0.85rem', color: 'rgba(214, 168, 95, 0.8)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>
          RECOMMENDED FOR MUSEUMS • SCIENCE CENTRES • SCHOOLS • CULTURAL SPACES
        </div>
      </div>
    </section>
  );
}
