import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: "Wolf App",
    description: "Miami-based club ticket booking app with RSVP discount cards, real-time profile sharing via Sockets, deep linking.",
    tech: ["React Native", "WebSockets", "Deep Linking"],
    github: "",
    live: ""
  },
  {
    id: 2,
    title: "Easy Chat App",
    description: "Global real-time chat platform (Kuwait) with themed rooms (Gaming, Entertainment, Movies), in-app purchases, Firebase Google Sign-In, and push notifications.",
    tech: ["React Native", "Firebase", "IAP", "Push Notifications"],
    github: "",
    live: ""
  },
  {
    id: 3,
    title: "Karrot Partner",
    description: "On-demand delivery partner app; built real-time order tracking, status updates, and customer communication. Added multi-language support, dark theme, onboarding screens, and notification-based deep redirections.",
    tech: ["React Native", "Redux Toolkit", "FCM", "REST APIs"],
    github: "",
    live: ""
  },
  {
    id: 4,
    title: "MADARIS",
    description: "A school platform providing academic education alongside Quranic teachings. Implemented and configured Expo push notifications for both Android and iOS platforms.",
    tech: ["React Native", "Expo", "Push Notifications"],
    github: "",
    live: ""
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Featured Mobile Projects</h2>
        
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
                  <div className="project-links">
                    {project.github && project.github !== '#' && (
                      <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                        <FiGithub size={20} />
                      </a>
                    )}
                    {project.live && project.live !== '#' && (
                      <a href={project.live} target="_blank" rel="noreferrer" aria-label="Live App">
                        <FiExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <ul className="project-tech-list">
                  {project.tech.map((tech, i) => (
                    <li key={i}>{tech}</li>
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
