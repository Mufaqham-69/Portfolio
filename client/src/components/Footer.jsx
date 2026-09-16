import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiHeart } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="portfolio-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="logo-badge">SAH</span>
            <span className="footer-brand-name">Syed Ali Hussain</span>
            <p className="footer-tagline">AI/ML Engineer & Systems Architect</p>
          </div>

          <div className="footer-links-group">
            <Link to="about" smooth={true} duration={500} offset={-70} className="footer-link">About</Link>
            <Link to="experience" smooth={true} duration={500} offset={-70} className="footer-link">Experience</Link>
            <Link to="projects" smooth={true} duration={500} offset={-70} className="footer-link">Projects</Link>
            <Link to="skills" smooth={true} duration={500} offset={-70} className="footer-link">Skills</Link>
            <Link to="contact" smooth={true} duration={500} offset={-70} className="footer-link">Contact</Link>
          </div>

          <Link to="hero" smooth={true} duration={600} className="back-to-top-btn" aria-label="Back to top">
            <FiArrowUp />
          </Link>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} Syed Ali Hussain. Designed & Built with MERN Stack.
          </p>
          <div className="footer-social-icons">
            <a href="https://github.com/syedalihussain" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href="https://linkedin.com/in/syedalihussain" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="mailto:syedalihussain@email.com" aria-label="Email">
              <FiMail />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
