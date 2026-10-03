import React, { useState, useEffect } from 'react';
import BackgroundVideo from './components/BackgroundVideo';
import StarfieldCanvas from './components/StarfieldCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExperienceIntro from './components/ExperienceIntro';
import SriLankaConstellations from './components/SriLankaConstellations';
import ProblemTransformation from './components/ProblemTransformation';
import TimeTravel from './components/TimeTravel';
import HowItWorks from './components/HowItWorks';
import StarExplorer from './components/StarExplorer';
import LearningLevels from './components/LearningLevels';
import Audience from './components/Audience';
import MuseumBenefits from './components/MuseumBenefits';
import HeritageTechnology from './components/HeritageTechnology';
import Technology from './components/Technology';
import ExperiencePreview from './components/ExperiencePreview';
import MuseumCTA from './components/MuseumCTA';
import Impact from './components/Impact';
import About from './components/About';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';

export default function App() {
  // Theme state: default to 'dark' or retrieve from localStorage
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('skyera_theme') || 'dark';
  });

  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  // Apply theme to document root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('skyera_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const openDemoModal = () => setIsDemoModalOpen(true);
  const closeDemoModal = () => setIsDemoModalOpen(false);

  return (
    <div className="app-root" style={{ position: 'relative', minHeight: '100vh', width: '100%' }}>
      {/* Continuous Looping Full-Page Background Video from src/videos/ */}
      <BackgroundVideo />

      {/* Ambient Twinkling Celestial Canvas */}
      <StarfieldCanvas speedMultiplier={0.7} interactive={true} />

      {/* Floating Glass Navigation with Theme Switcher */}
      <Navbar
        onOpenDemoModal={openDemoModal}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Long-Scroll Showcase */}
      <main id="main-content">
        {/* Section 01: Hero */}
        <Hero onOpenDemoModal={openDemoModal} />

        <div className="section-divider" />

        {/* Section 02: What is SkyEra? */}
        <ExperienceIntro />

        <div className="section-divider" />

        {/* New Feature: Dedicated Sri Lanka Visible Constellations */}
        <SriLankaConstellations />

        <div className="section-divider" />

        {/* Section 03: The Problem / Transformation */}
        <ProblemTransformation />

        <div className="section-divider" />

        {/* Section 04: Signature "Travel Through Time" */}
        <TimeTravel />

        <div className="section-divider" />

        {/* Section 05: How SkyEra Works */}
        <HowItWorks />

        <div className="section-divider" />

        {/* Section 06: Interactive Star Exploration */}
        <StarExplorer />

        <div className="section-divider" />

        {/* Section 07: Learning Through Play */}
        <LearningLevels />

        <div className="section-divider" />

        {/* Section 08: Target Audience */}
        <Audience />

        <div className="section-divider" />

        {/* Section 09: Why SkyEra for Museums */}
        <MuseumBenefits onOpenDemoModal={openDemoModal} />

        <div className="section-divider" />

        {/* Section 10: Heritage × Technology */}
        <HeritageTechnology />

        <div className="section-divider" />

        {/* Section 11: Technology */}
        <Technology />

        <div className="section-divider" />

        {/* Section 12: Experience Preview */}
        <ExperiencePreview />

        <div className="section-divider" />

        {/* Section 13: For Museums & Educational Spaces */}
        <MuseumCTA onOpenDemoModal={openDemoModal} />

        <div className="section-divider" />

        {/* Section 14: Experience Impact */}
        <Impact />

        <div className="section-divider" />

        {/* Section 15: About SkyEra */}
        <About />

        <div className="section-divider" />

        {/* Section 16: Final CTA */}
        <FinalCTA onOpenDemoModal={openDemoModal} />
      </main>

      {/* Section 24: Footer */}
      <Footer onOpenDemoModal={openDemoModal} />

      {/* Section 26: Request a Demo Form Modal */}
      <DemoModal isOpen={isDemoModalOpen} onClose={closeDemoModal} />
    </div>
  );
}
