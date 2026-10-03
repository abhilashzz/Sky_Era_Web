import React from 'react';
import { Sparkles, Palette, Code, GraduationCap, Compass } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      title: 'Experience Design',
      desc: 'Crafting non-intimidating, cinematic interfaces that invite spontaneous exploration without requiring prior technical instruction.',
      icon: <Palette size={20} color="#D6A85F" />
    },
    {
      title: 'Interactive Development',
      desc: 'Developing high-fidelity Unity kiosk modules with fast touch tracking, smooth coordinate interpolation, and stable kiosk runtimes.',
      icon: <Code size={20} color="#5BE0E5" />
    },
    {
      title: 'Learning Design',
      desc: 'Structuring cognitive progression from simple guided tracing to memory recall, ensuring young visitors leave with genuine confidence.',
      icon: <GraduationCap size={20} color="#D6A85F" />
    },
    {
      title: 'Cultural Heritage Research',
      desc: 'Cross-referencing historical Sinhala astronomical nomenclature, monastic chronicles, and architectural alignments with open celestial data.',
      icon: <Compass size={20} color="#5BE0E5" />
    }
  ];

  return (
    <section className="section-wrapper" id="about">
      <div className="container">
        {/* Storytelling Feature Card */}
        <div className="about-card-large">
          <div style={{ maxWidth: '820px' }}>

            <h2 className="section-heading" style={{ marginBottom: '1.5rem' }}>
              The Vision Behind Sky Era.
            </h2>
            <blockquote style={{ fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', color: '#FFFFFF', fontStyle: 'italic', borderLeft: '3px solid var(--accent-gold)', paddingLeft: '1.5rem', marginBottom: '1.5rem', lineHeight: 1.4 }}>
              “How can ancient celestial heritage become an interactive experience that learners of all ages can touch, explore, and remember?”
            </blockquote>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
              Sky Era was created to transform traditional, static astronomy exhibits into an engaging, participatory discovery experience. Moving beyond glass vitrines and text-heavy boards, the platform empowers visitors to directly identify and reconstruct authentic star patterns using intuitive touch kiosk technology.
            </p>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              By merging Unity real-time graphics, tactile finger tracing, and calibrated historical star scenes, Sky Era is designed as an interactive kiosk solution recommended for museums, science centres, planetariums, and schools.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="about-pillars-grid">
            {pillars.map((p, idx) => (
              <div key={idx} className="about-pillar">
                <div style={{ marginBottom: '0.75rem' }}>{p.icon}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
