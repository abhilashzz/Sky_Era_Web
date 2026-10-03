import React from 'react';
import { Sparkles, Users, Lightbulb, Hourglass, BookOpen, RefreshCw, ArrowUpRight } from 'lucide-react';

export default function MuseumBenefits({ onOpenDemoModal }) {
  const benefits = [
    {
      index: '01',
      title: 'Increase Visitor Engagement',
      summary: 'Transform passive observation into interactive participation.',
      detail: 'Replaces static display reading with touch-driven agency. Visitors explore skies actively, boosting recall and voluntary participation across all age groups.',
      icon: <Users size={22} />
    },
    {
      index: '02',
      title: 'Make Complex Ideas Accessible',
      summary: 'Use visual and guided interaction to help younger visitors understand astronomy.',
      detail: 'Abstract celestial coordinate mechanics, historical precession, and star patterns become intuitive through step-by-step guided lines and responsive visual milestones.',
      icon: <Lightbulb size={22} />
    },
    {
      index: '03',
      title: 'Encourage Deeper Exploration',
      summary: 'Give visitors meaningful reasons to interact with exhibits for longer.',
      detail: 'Gamified learning states and difficulty progression naturally extend dwell times within the traditional astronomy wing from seconds to memorable minutes.',
      icon: <Hourglass size={22} />
    },
    {
      index: '04',
      title: 'Support Educational Visits',
      summary: 'Provide an interactive experience useful for schools, teachers and guided learning.',
      detail: 'Enables teachers to run structured group activities where students independently recreate constellations and discuss indigenous astronomical heritage.',
      icon: <BookOpen size={22} />
    },
    {
      index: '05',
      title: 'Modernize Existing Exhibitions',
      summary: 'Introduce digital interaction while preserving the cultural and educational purpose of the exhibit.',
      detail: 'Integrates seamlessly into existing cultural galleries, elevating historical artifacts and stone inscriptions with 21st-century digital museum technology.',
      icon: <RefreshCw size={22} />
    }
  ];

  return (
    <section className="section-wrapper" id="museums">
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>

          <h2 className="section-heading">
            Turn Museum Displays <span className="text-gradient-gold">Into Experiences.</span>
          </h2>
          <p className="section-subheading" style={{ margin: '1rem auto 0' }}>
            Elevate museum exhibitions from silent preservation into dynamic, memorable educational destinations that engage contemporary audiences.
          </p>
        </div>

        {/* Premium Editorial Benefits Stack */}
        <div className="benefits-editorial-stack">
          {benefits.map((benefit) => (
            <div key={benefit.index} className="benefit-row">
              <div className="benefit-index">{benefit.index}</div>
              <div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <div style={{ fontSize: '0.85rem', color: 'var(--accent-gold)', marginTop: '4px', fontWeight: 600 }}>
                  {benefit.summary}
                </div>
              </div>
              <div className="benefit-desc">
                {benefit.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Institutional Callout Banner */}
        <div style={{ marginTop: '3.5rem', padding: '2rem 2.5rem', background: 'linear-gradient(135deg, rgba(11,45,99,0.3) 0%, rgba(6,22,49,0.7) 100%)', border: '1px solid rgba(214,168,95,0.3)', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <h4 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '4px' }}>
              Planning an exhibition upgrade or educational installation?
            </h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
              Discuss custom sky scene adaptations, local folklore inclusion, and hardware specifications with our team.
            </p>
          </div>
          <button
            className="btn btn-primary"
            onClick={onOpenDemoModal}
            id="museum-benefits-discuss-btn"
          >
            <span>Discuss an Installation</span>
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
