import React from 'react';
import { FiMail, FiGithub, FiLinkedin, FiPhone } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const email = 'trushal.prajapati1601@gmail.com';
  const subject = 'Inquiry from Portfolio';
  const body =
    "Hi Trushal,\n\nI reached out to you through your portfolio and would like to discuss a project or opportunity with you.\n\nBest regards,";
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    email,
  )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <footer id="contact" className="section contact-section">
      <div className="container">
        
        <div className="contact-card glass animate-fade-in">
          <h2 className="contact-title">Let's Build Something Amazing.</h2>
          <p className="contact-subtitle">
            Looking for a skilled React Native developer to bring your mobile app ideas to life? 
            My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <a
            href={gmailComposeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary contact-btn"
          >
            <FiMail /> Say Hello
          </a>
          
          <div className="social-links">
            <a href="https://github.com/trushal1601" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/trushal-prajapati-306aa2251" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin size={24} />
            </a>
            <a href="tel:+919898656562" aria-label="Phone">
              <FiPhone size={24} />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Trushal. Designed & Built with React.</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Contact;
