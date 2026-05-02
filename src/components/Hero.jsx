import React from 'react';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        
        <div className="hero-content animate-fade-in">
          <p className="hero-subtitle">Hello, I'm</p>
          <h1 className="hero-title">
            Trushal<span className="highlight">.</span>
          </h1>
          <h2 className="hero-role">React-Native Developer</h2>
          <p className="hero-description">
            Crafting seamless, high-performance mobile experiences for iOS and Android. 
            Passionate about bringing innovative UI/UX designs to life through clean architecture 
            and modern cross-platform native technologies.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Work <FiArrowRight />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-visual animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="visual-circle main-circle">
            {/* We could place a Memoji or Portrait here */}
            {/* <img src="/portrait.png" alt="Trushal" className="hero-image" /> */}
            <div className="placeholder-image">
              <span>Mobile Dev</span>
            </div>
          </div>
          
          {/* Floating decorative elements representing React Native / Mobile */}
          <div className="floating-badge badge-1 glass">
            React Native
          </div>
          <div className="floating-badge badge-2 glass">
            iOS & Android
          </div>
          <div className="floating-badge badge-3 glass">
            TypeScript
          </div>
        </div>

      </div>

      <div className="scroll-indicator">
        <a href="#experience" aria-label="Scroll Down">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
