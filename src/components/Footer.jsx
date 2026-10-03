import React from 'react';
import { Compass, ArrowUp, Star } from 'lucide-react';

export default function Footer({ onOpenDemoModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Experience', href: '#experience' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Learning', href: '#learning' },
    { label: 'For Museums', href: '#museums' },
    { label: 'About', href: '#about' },
    { label: 'Team', href: '#team' }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <div style={{ marginBottom: '1.25rem' }}>
              <img
                src="/logo/SKY_ERA.png"
                alt="SkyEra Interactive Kiosk"
                className="footer-logo-img"
              />
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Interactive celestial kiosk and educational experience to explore, learn, and recognize historical star patterns through touch and discovery.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: 'var(--accent-gold)', letterSpacing: '0.1em' }}>
              <Star size={12} fill="#D6A85F" />
              <span>OFFICIAL PRODUCT • RECOMMENDED FOR MUSEUMS, SCIENCE CENTRES & SCHOOLS</span>
            </div>
          </div>

          {/* Links Column */}
          <div className="footer-links-group">
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                Navigation
              </div>
              <ul className="footer-nav-list">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} onClick={(e) => handleLinkClick(e, item.href)}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                Showcase
              </div>
              <ul className="footer-nav-list">
                <li><a href="#time-travel" onClick={(e) => handleLinkClick(e, '#time-travel')}>Time Exploration</a></li>
                <li><a href="#star-explorer" onClick={(e) => handleLinkClick(e, '#star-explorer')}>Star Explorer</a></li>
                <li><a href="#learning" onClick={(e) => handleLinkClick(e, '#learning')}>Learning Modes</a></li>
                <li><a href="#technology" onClick={(e) => handleLinkClick(e, '#technology')}>Technology Stack</a></li>
              </ul>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', fontWeight: 700, color: '#FFFFFF', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                Engage
              </div>
              <ul className="footer-nav-list">
                <li><a href="#" onClick={(e) => { e.preventDefault(); onOpenDemoModal(); }}>Request a Demo</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); onOpenDemoModal(); }}>Institutional Partnership</a></li>
                <li><a href="#about" onClick={(e) => handleLinkClick(e, '#about')}>Research & Design</a></li>
                <li><a href="#team" onClick={(e) => handleLinkClick(e, '#team')}>Supervisors & Developers</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div>
            © 2026 Sky Era. All rights reserved. Interactive Cultural Technology.
          </div>
          <button
            onClick={scrollToTop}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.82rem',
              color: 'var(--text-secondary)',
              background: 'rgba(255,255,255,0.05)',
              padding: '6px 14px',
              borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.08)',
              transition: 'all 0.2s',
              cursor: 'pointer'
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
