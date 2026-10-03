import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import '../styles/hero.css';

export default function Hero({ onOpenDemoModal }) {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 12;
      const y = (e.clientY / window.innerHeight - 0.5) * 8;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleScrollToExperience = (e) => {
    e.preventDefault();
    const elem = document.querySelector('#experience');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="hero">
      {/* Subtle ambient light aura */}
      <div className="hero-glow-nebula" />

      {/* Foreground Hero Content */}
      <div
        className="hero-content"
        style={{
          transform: `translate3d(${mouseOffset.x * 0.4}px, ${mouseOffset.y * 0.4}px, 0)`
        }}
      >

        <h1 className="hero-title-main">SKY ERA</h1>

        <h2 className="hero-title-sub">
          Explore Sri Lanka’s Night Sky <span>Across&nbsp;Time.</span>
        </h2>

        <p className="hero-description">
          Step into an interactive museum experience where history, astronomy and learning come together beneath the stars.
        </p>

        <div className="hero-cta-group">
          <a
            href="#experience"
            className="btn btn-primary"
            onClick={handleScrollToExperience}
            id="hero-explore-btn"
          >
            <span>Explore the Experience</span>
            <ArrowRight size={18} />
          </a>

          <button
            className="btn btn-secondary"
            onClick={onOpenDemoModal}
            id="hero-demo-btn"
          >
            <span>Request a Demo</span>
          </button>
        </div>
      </div>

      {/* Clean Minimal Scroll Indicator */}
      <button
        className="hero-scroll-indicator"
        onClick={handleScrollToExperience}
        aria-label="Scroll to explore the experience"
      >
        <span className="scroll-indicator-text">SCROLL TO TRAVEL THROUGH TIME</span>
        <div className="scroll-indicator-icon">
          <ChevronDown size={16} />
        </div>
      </button>
    </section>
  );
}
