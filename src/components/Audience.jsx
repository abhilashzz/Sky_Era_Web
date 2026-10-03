import React from 'react';
import { Users, GraduationCap, Compass, Sparkles, BookOpen, Heart, Landmark } from 'lucide-react';

export default function Audience() {
  const secondaryAudiences = [
    {
      title: 'Students',
      role: 'Curiosity-Driven Learning',
      desc: 'Learn by exploring and creating rather than memorizing dry textbook diagrams.',
      icon: <GraduationCap size={22} color="#D6A85F" />
    },
    {
      title: 'Teachers',
      role: 'Educational Support',
      desc: 'Support guided museum visits and align historical topics with elementary curricula.',
      icon: <BookOpen size={22} color="#5BE0E5" />
    },
    {
      title: 'Families',
      role: 'Intergenerational Discovery',
      desc: 'Discover ancient astronomy together through intuitive multi-touch activities.',
      icon: <Heart size={22} color="#D6A85F" />
    },
    {
      title: 'Museum Visitors',
      role: 'Accessible Exploration',
      desc: 'Understand historical celestial exhibits effortlessly without prior astronomy knowledge.',
      icon: <Landmark size={22} color="#5BE0E5" />
    },
    {
      title: 'Older Learners',
      role: 'Deep Engagement',
      desc: 'Use more challenging memory modes and cultural notes for deeper historical engagement.',
      icon: <Compass size={22} color="#D6A85F" />
    }
  ];

  return (
    <section className="section-wrapper" id="audience">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto' }}>

          <h2 className="section-heading">
            Created for Young Explorers. <span className="text-gradient-gold">Open to Everyone.</span>
          </h2>
          <p style={{ margin: '1rem auto 0' }}>
            While crafted thoughtfully for primary school children discovering the cosmos, Sky Era creates an inviting space for learners of all ages.
          </p>
        </div>

        {/* Primary Audience Hero Feature */}
        <div className="audience-hero-card">
          <div className="audience-hero-badge">AGES 6–12</div>
          <h3 style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2.2rem)', color: '#FFFFFF', marginBottom: '0.75rem' }}>
            Primary Learning Audience
          </h3>
          <p style={{ margin: '0 auto', maxWidth: '640px', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
            Designed with clear instructions, strong visual guidance, tactile interactions, and immediate feedback tailored specifically for developing young minds.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#D6A85F', fontSize: '0.88rem', fontWeight: 600 }}>
              <Sparkles size={16} />
              <span>Intuitive Finger Drawing</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#D6A85F', fontSize: '0.88rem', fontWeight: 600 }}>
              <Sparkles size={16} />
              <span>Encouraging Audio & Visual Cues</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#D6A85F', fontSize: '0.88rem', fontWeight: 600 }}>
              <Sparkles size={16} />
              <span>Cultural Heritage Storytelling</span>
            </div>
          </div>
        </div>

        {/* Secondary Audience Grid */}
        <div className="audience-secondary-grid">
          {secondaryAudiences.map((item, idx) => (
            <div key={idx} className="audience-mini-card">
              <div style={{ marginBottom: '1rem' }}>{item.icon}</div>
              <h4>{item.title}</h4>
              <div style={{ fontSize: '0.75rem', color: 'var(--accent-gold)', fontWeight: 600, letterSpacing: '0.08em', marginBottom: '8px', textTransform: 'uppercase' }}>
                {item.role}
              </div>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
