import React from 'react';
import { GraduationCap, ExternalLink, Code2, Layers } from 'lucide-react';
import malithaImg from '../images/developers/Malitha De Costa.png';
import luthiraImg from '../images/developers/Luthira Himsara.jpeg';
import navodaImg from '../images/developers/Navoda nethmini wickramasinghe.jpeg';
import thushadImg from '../images/developers/Thushad Abhilash.jpg';
import arunaImg from '../images/Supervisor and co- supervise/Mr. Aruna Ishara Gamage.jpeg';
import nushkanImg from '../images/Supervisor and co- supervise/Mr. Nushkan Nisme.jpg';

export default function Team() {
  const supervisors = [
    {
      name: 'Mr. Aruna Ishara Gamage',
      role: 'Supervisor',
      institution: 'SLIIT — Faculty of Computing',
      image: arunaImg,
      profileUrl: 'https://www.sliit.lk/academic/academic-staff/ishara.g'
    },
    {
      name: 'Mr. Nushkan Nisme',
      role: 'Co-Supervisor',
      institution: 'SLIIT — Faculty of Computing',
      image: nushkanImg,
      profileUrl: 'https://www.sliit.lk/academic/academic-staff/nushkan.n'
    }
  ];

  const developers = [
    {
      name: 'Malitha De Costa',
      role: 'Unity Developer',
      degree: 'BSc. Information Technology specializing Interactive Media (UG)',
      image: malithaImg,
      icon: <Layers size={14} color="var(--accent-gold)" />
    },
    {
      name: 'Luthira Himsara',
      role: 'Unity Developer',
      degree: 'BSc. Information Technology specializing Interactive Media (UG)',
      image: luthiraImg,
      icon: <Layers size={14} color="var(--accent-gold)" />
    },
    {
      name: 'N.N. wickramasinghe',
      role: 'Unity Developer',
      degree: 'BSc. Information Technology specializing Interactive Media (UG)',
      image: navodaImg,
      icon: <Layers size={14} color="var(--accent-gold)" />
    },
    {
      name: 'Thushad Abhilash',
      role: 'Web & Interactive Developer',
      degree: 'BSc. Information Technology specializing Interactive Media (UG)',
      image: thushadImg,
      icon: <Code2 size={14} color="#5BE0E5" />
    }
  ];

  return (
    <section className="section-wrapper team-section" id="team">
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            <span>RESEARCH SUPERVISION &amp; DEVELOPMENT</span>
          </div>

          <h2 className="section-heading">
            Supervisors &amp; <span className="text-gradient-gold">Development Team.</span>
          </h2>
          <p className="section-subheading" style={{ margin: '1rem auto 0', maxWidth: '720px' }}>
            Sky Era is designed, researched, and developed under academic mentorship by undergraduate researchers specializing in Interactive Media.
          </p>
        </div>

        {/* Academic Supervision Grid */}
        <div className="supervisors-wrapper">
          <div className="supervisors-section-title">
            <GraduationCap size={18} color="var(--accent-gold)" />
            <span>Academic Supervision</span>
          </div>

          <div className="supervisors-grid">
            {supervisors.map((s, idx) => (
              <div key={idx} className="supervisor-card glass-panel">
                <div className="supervisor-avatar-wrap">
                  <img
                    src={s.image}
                    alt={s.name}
                    className="supervisor-avatar"
                    loading="lazy"
                  />
                </div>
                <div className="supervisor-card-content">
                  <div className="supervisor-role-pill">{s.role}</div>
                  <h3 className="supervisor-name-wrap">
                    <a
                      href={s.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="supervisor-link"
                      title={`Visit ${s.name}'s profile on SLIIT Academic Staff`}
                    >
                      <span>{s.name}</span>
                      <ExternalLink size={15} className="supervisor-ext-icon" />
                    </a>
                  </h3>
                  <div className="supervisor-institution">{s.institution}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Developers Section Header */}
        <div className="developers-section-divider">
          <div className="dev-header-pill">
            <span>Development Team</span>
          </div>
        </div>

        {/* 4 Developers Grid */}
        <div className="developers-grid">
          {developers.map((dev, idx) => (
            <div key={idx} className="dev-card glass-panel">
              <div className="dev-photo-container">
                <img
                  src={dev.image}
                  alt={dev.name}
                  className="dev-photo"
                  loading="lazy"
                />
                <div className="dev-role-badge">
                  {dev.icon}
                  <span>{dev.role}</span>
                </div>
              </div>

              <div className="dev-card-body">
                <h4 className="dev-name">{dev.name}</h4>
                <div className="dev-degree-tag">
                  <GraduationCap size={13} className="dev-cap-icon" />
                  <span>{dev.degree}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
