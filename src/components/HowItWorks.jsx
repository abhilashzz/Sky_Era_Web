import React, { useState } from 'react';
import { Compass, ZoomIn, PenTool, Award, Sparkles, Check, RefreshCw } from 'lucide-react';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'EXPLORE',
      summary: 'Move through selected historical moments and discover changing views of the night sky.',
      icon: <Compass size={22} />,
      kioskVisual: {
        heading: 'Horizon Shift Mode',
        sub: 'Chronological sky view spanning ancient to modern Sri Lanka',
        detail: 'Visitors use touch pan gestures on the kiosk screen to navigate historical celestial latitudes.'
      }
    },
    {
      num: '02',
      title: 'DISCOVER',
      summary: 'Zoom into the sky and observe visible star patterns.',
      icon: <ZoomIn size={22} />,
      kioskVisual: {
        heading: 'Star Zoom & Magnification',
        sub: 'High-definition celestial cluster focus',
        detail: 'Pinch-to-zoom brings distant asterisms into clarity, highlighting historical Sinhala astronomical names.'
      }
    },
    {
      num: '03',
      title: 'CREATE',
      summary: 'Select a star pattern and recreate it using an interactive drawing activity.',
      icon: <PenTool size={22} />,
      kioskVisual: {
        heading: 'Interactive Star Tracing Canvas',
        sub: 'Tactile node-to-node line reconstruction',
        detail: 'Children drag their fingers across glowing star points to reconstruct constellations step by step.'
      }
    },
    {
      num: '04',
      title: 'LEARN',
      summary: 'Receive immediate guidance, feedback and the opportunity to try again.',
      icon: <Award size={22} />,
      kioskVisual: {
        heading: 'Validation & Cultural Lore',
        sub: 'Immediate visual feedback with retry hints',
        detail: 'On completing the pattern, astronomical lore unlocks with star badges and cheerful encouragement.'
      }
    }
  ];

  const current = steps[activeStep];

  return (
    <section className="section-wrapper" id="how-it-works">
      <div className="container">
        {/* Section Heading */}
        <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>

          <h2 className="section-heading">
            One Sky. <span className="text-gradient-gold">Four Simple Steps.</span>
          </h2>
          <p className="section-subheading" style={{ margin: '1rem auto 0' }}>
            A structured interactive loop designed to build confidence, curiosity and celestial understanding.
          </p>
        </div>

        {/* Two-Column Interactive Storytelling Grid */}
        <div className="how-it-works-grid">
          {/* Left: Step Cards Stack */}
          <div className="steps-stack">
            {steps.map((step, idx) => (
              <div
                key={step.num}
                className={`step-card ${activeStep === idx ? 'active' : ''}`}
                onClick={() => setActiveStep(idx)}
              >
                <div className="step-num-huge">{step.num}</div>
                <div className="step-content">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <span style={{ color: activeStep === idx ? '#D6A85F' : '#98A5B8' }}>{step.icon}</span>
                    <h3>{step.title}</h3>
                  </div>
                  <p>{step.summary}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Synchronized Interactive Visual Preview */}
          <div className="step-visual-preview">
            {/* SVG Visual Demonstration */}
            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', zIndex: 2 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', color: '#D6A85F', letterSpacing: '0.12em', fontWeight: 700 }}>
                  STEP {current.num} SIMULATION
                </span>
                <span style={{ fontSize: '0.75rem', background: 'rgba(2,8,23,0.6)', padding: '4px 10px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  ACTIVE KIOSK LOGIC
                </span>
              </div>

              {/* Dynamic SVG graphic based on active step */}
              <div style={{ margin: '1.5rem auto', textAlign: 'center' }}>
                {activeStep === 0 && (
                  <svg viewBox="0 0 300 140" style={{ width: '100%', maxWidth: '280px' }}>
                    <circle cx="150" cy="120" r="100" stroke="rgba(214,168,95,0.4)" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                    <line x1="40" y1="120" x2="260" y2="120" stroke="#D6A85F" strokeWidth="2" />
                    <circle cx="150" cy="40" r="16" fill="rgba(214,168,95,0.2)" stroke="#D6A85F" strokeWidth="1.5" />
                    <circle cx="150" cy="40" r="4" fill="#FFFFFF" />
                  </svg>
                )}

                {activeStep === 1 && (
                  <svg viewBox="0 0 300 140" style={{ width: '100%', maxWidth: '280px' }}>
                    <circle cx="150" cy="70" r="48" stroke="#5BE0E5" strokeWidth="2" strokeDasharray="6 4" fill="none" />
                    <circle cx="130" cy="60" r="5" fill="#D6A85F" />
                    <circle cx="170" cy="80" r="5" fill="#5BE0E5" />
                    <line x1="130" y1="60" x2="170" y2="80" stroke="rgba(214,168,95,0.6)" strokeWidth="1.5" />
                    <line x1="184" y1="104" x2="215" y2="135" stroke="#5BE0E5" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                )}

                {activeStep === 2 && (
                  <svg viewBox="0 0 300 140" style={{ width: '100%', maxWidth: '280px' }}>
                    <line x1="80" y1="100" x2="150" y2="40" stroke="#D6A85F" strokeWidth="2" strokeDasharray="3 3" />
                    <line x1="150" y1="40" x2="220" y2="100" stroke="#5BE0E5" strokeWidth="2" />
                    <circle cx="80" cy="100" r="6" fill="#D6A85F" />
                    <circle cx="150" cy="40" r="8" fill="#D6A85F" filter="drop-shadow(0 0 8px #D6A85F)" />
                    <circle cx="220" cy="100" r="6" fill="#5BE0E5" />
                    {/* Hand pointer trace */}
                    <circle cx="150" cy="40" r="14" stroke="#D6A85F" strokeWidth="1" strokeDasharray="2 2" fill="none" />
                  </svg>
                )}

                {activeStep === 3 && (
                  <svg viewBox="0 0 300 140" style={{ width: '100%', maxWidth: '280px' }}>
                    <circle cx="150" cy="65" r="32" fill="rgba(214,168,95,0.15)" stroke="#D6A85F" strokeWidth="2" />
                    <path d="M140 65 L148 73 L162 55" stroke="#5BE0E5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    <circle cx="110" cy="40" r="3" fill="#D6A85F" />
                    <circle cx="190" cy="40" r="3" fill="#D6A85F" />
                    <circle cx="150" cy="115" r="3" fill="#D6A85F" />
                  </svg>
                )}

                <h4 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginTop: '0.75rem' }}>
                  {current.kioskVisual.heading}
                </h4>
                <div style={{ fontSize: '0.85rem', color: 'var(--accent-gold-light)', marginTop: '4px' }}>
                  {current.kioskVisual.sub}
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '8px', maxWidth: '380px' }}>
                  {current.kioskVisual.detail}
                </p>
              </div>

              {/* Action indicator */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
                {steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    style={{
                      width: activeStep === i ? '24px' : '8px',
                      height: '8px',
                      borderRadius: '4px',
                      background: activeStep === i ? '#D6A85F' : 'rgba(255,255,255,0.2)',
                      transition: 'all 0.2s',
                      cursor: 'pointer'
                    }}
                    aria-label={`Go to step ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
