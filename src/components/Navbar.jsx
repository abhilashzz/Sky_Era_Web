import React, { useState, useEffect } from 'react';
import { Compass, Sparkles, ArrowRight, X, Menu, Sun, Moon, ChevronDown } from 'lucide-react';
import '../styles/navbar.css';

export default function Navbar({ onOpenDemoModal, theme = 'dark', onToggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    {
      label: 'Experience',
      href: '#experience',
      children: [
        { label: 'How It Works', href: '#how-it-works' }
      ]
    },
    {
      label: 'Sri Lanka Skies',
      href: '#sri-lanka-skies',
      children: [
        { label: 'Time Travel Exploration', href: '#time-travel' }
      ]
    },
    { label: 'Learning', href: '#learning' },
    { label: 'For Museums', href: '#museums' },
    {
      label: 'About',
      href: '#about',
      children: [
        { label: 'Supervisors & Developers', href: '#team' }
      ]
    }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`nav-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          {/* Official SkyEra Brand Logo */}
          <a
            href="#"
            className="nav-brand"
            aria-label="Sky Era Home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img
              src="/logo/SKY_ERA.png"
              alt="Sky Era Logo"
              className="brand-logo-img"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="nav-links-desktop" aria-label="Main Navigation">
            {navLinks.map((link) => {
              if (link.children) {
                return (
                  <div key={link.label} className="nav-item-dropdown">
                    <a
                      href={link.href}
                      className="nav-link nav-link-with-arrow"
                      onClick={(e) => handleLinkClick(e, link.href)}
                    >
                      <span>{link.label}</span>
                      <ChevronDown size={13} className="nav-chevron" />
                    </a>
                    <div className="nav-dropdown-menu">
                      <a
                        href={link.href}
                        className="nav-dropdown-item"
                        onClick={(e) => handleLinkClick(e, link.href)}
                      >
                        <span>{link.label}</span>
                      </a>
                      {link.children.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          className="nav-dropdown-item"
                          onClick={(e) => handleLinkClick(e, sub.href)}
                        >
                          <span>{sub.label}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="nav-link"
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* CTA, Theme Toggle & Mobile Toggle */}
          <div className="nav-actions">
            {/* Theme Toggle Button */}
            <button
              className="theme-toggle-btn"
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <Sun size={18} color="var(--accent-gold)" />
              ) : (
                <Moon size={18} color="var(--accent-gold)" />
              )}
            </button>

            <button
              className="btn btn-primary nav-demo-btn"
              onClick={onOpenDemoModal}
              id="navbar-request-demo-btn"
            >
              <span>Request a Demo</span>
              <ArrowRight size={16} />
            </button>

            <button
              className={`mobile-toggle-btn ${mobileMenuOpen ? 'open' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'open' : ''}`} aria-hidden={!mobileMenuOpen}>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '340px', marginBottom: '2rem', alignItems: 'center' }}>
          <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)' }}>MENU</span>
          <button
            className="theme-toggle-btn"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} color="var(--accent-gold)" /> : <Moon size={18} color="var(--accent-gold)" />}
          </button>
        </div>

        <nav className="mobile-nav-links">
          {navLinks.map((link) => (
            <div key={link.label} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <a
                href={link.href}
                className="mobile-nav-link"
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label}
              </a>
              {link.children && (
                <div className="mobile-sub-nav">
                  {link.children.map((sub) => (
                    <a
                      key={sub.label}
                      href={sub.href}
                      className="mobile-sub-link"
                      onClick={(e) => handleLinkClick(e, sub.href)}
                    >
                      <span>↳</span>
                      <span>{sub.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <button
          className="btn btn-primary"
          style={{ width: '100%', maxWidth: '300px' }}
          onClick={() => {
            setMobileMenuOpen(false);
            onOpenDemoModal();
          }}
        >
          <span>Request a Demo</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </>
  );
}
