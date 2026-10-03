import React from 'react';
import { Layers, Code2, Database, Compass, Monitor, ShieldCheck } from 'lucide-react';

export default function Technology() {
  const techPillars = [
    {
      title: 'Unity-Powered Experience',
      desc: 'Interactive graphics, celestial shaders, and kiosk user flows developed using the Unity engine for fluid, high-frame-rate tactile interaction.',
      icon: <Layers size={22} color="#D6A85F" />
    },
    {
      title: 'Interactive Logic',
      desc: 'High-performance C# scripts govern touch gesture detection, smooth coordinate navigation, responsive zoom thresholds, and drawing validation.',
      icon: <Code2 size={22} color="#5BE0E5" />
    },
    {
      title: 'Kiosk Architecture',
      desc: 'Engineered as a secure, standalone interactive kiosk experience built for reliable public operation across museums, science centres, and schools.',
      icon: <Monitor size={22} color="#D6A85F" />
    },
    {
      title: 'Astronomical Reference',
      desc: 'Selected historical sky vistas are grounded in astronomical reference data, cross-referenced with open planetarium platforms such as Stellarium.',
      icon: <Compass size={22} color="#5BE0E5" />
    }
  ];

  return (
    <section className="section-wrapper" id="technology">
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>

          <h2 className="section-heading">
            Built for Interactive Spaces.
          </h2>
          <p className="section-subheading" style={{ margin: '1rem auto 0' }}>
            Engineered with robust real-time graphics and reliable kiosk architecture tailored for public educational spaces.
          </p>
        </div>

        {/* Technology Cards Grid */}
        <div className="tech-grid">
          {techPillars.map((pillar, idx) => (
            <div key={idx} className="tech-card">
              <div className="tech-card-header">
                <div className="tech-icon-box">{pillar.icon}</div>
                <h3>{pillar.title}</h3>
              </div>
              <p>{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Technical Architecture Note */}
        <div style={{ marginTop: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          <ShieldCheck size={16} color="#D6A85F" />
          <span>
            Enterprise-ready modular architecture designed for seamless deployment across museums, science centres, and schools.
          </span>
        </div>
      </div>
    </section>
  );
}
