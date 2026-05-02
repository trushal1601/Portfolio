import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: "Club Ticketing & RSVP App",
    description: "Club ticket booking app with RSVP discount cards, real-time profile sharing via WebSockets, deep linking, and Stripe payments.",
    tech: ["React Native", "WebSockets", "Deep Linking", "Stripe"],
    github: "",
    live: ""
  },
  {
    id: 2,
    title: "Global Real-Time Chat App",
    description: "Global real-time chat platform with themed rooms (Gaming, Entertainment, Movies), in-app purchases, Google Sign-In (Firebase Auth), and push notifications.",
    tech: ["React Native", "Firebase", "In-App Purchases", "Push Notifications"],
    github: "",
    live: ""
  },
  {
    id: 3,
    title: "Delivery Partner Logistics App",
    description: "On-demand delivery partner app; built real-time order tracking, status updates, and customer communication. Added multi-language support, dark theme, onboarding screens, and notification-driven deep links.",
    tech: ["React Native", "Redux Toolkit", "Firebase Cloud Messaging", "REST APIs"],
    github: "",
    live: ""
  },
  {
    id: 4,
    title: "School & Learning Platform",
    description: "A school platform for academic learning. Implemented and configured Expo push notifications for both Android and iOS platforms.",
    tech: ["React Native", "Expo", "Push Notifications"],
    github: "",
    live: ""
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Featured Domain Projects</h2>
        <p className="projects-subtitle">
          Project titles are generalized due to company policy; detailed case studies can be shared on request.
        </p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card glass animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  {(project.github && project.github !== '#') || (project.live && project.live !== '#') ? (
                    <div className="project-links">
                      {project.github && project.github !== '#' && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                          <FiGithub size={20} />
                        </a>
                      )}
                      {project.live && project.live !== '#' && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live App">
                          <FiExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  ) : null}
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <ul className="project-tech-list">
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
