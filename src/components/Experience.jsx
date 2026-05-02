import React from 'react';
import './Experience.css';

const experiences = [
  {
    id: 1,
    role: "Junior Software Engineer",
    company: "Vrinsoft Technology Pvt. Ltd.",
    duration: "Nov 2024 - Present",
    description: [
      "Developed and maintained 3+ React Native applications (Karrot Partner, MADARIS, Wolf App, Easy Chat), delivering features across Android and iOS with consistent UI/UX quality.",
      "Integrated Firebase Cloud Messaging (FCM) for real-time push notifications with custom permission handling and notification routing, reducing missed-notification incidents by improving reliability.",
      "Implemented Google OAuth authentication, enabling secure and seamless user onboarding flows.",
      "Built real-time chat and profile-sharing features using WebSockets; integrated Deep Linking for in-app navigation from external URLs.",
      "Configured and integrated In-App Purchases (IAP) for a Kuwait-based global chat app, enabling monetization of premium features.",
    ]
  },
  {
    id: 2,
    role: "React Native and React Intern",
    company: "Infolanze Tech",
    duration: "May 2024 - Nov 2024",
    description: [
      "Resolved TypeScript type errors across the entire codebase of a React JS e-commerce platform, improving code stability and enabling safer refactoring.",
      "Designed UI and integrated backend APIs for a Blockchain-based React Native application, enhancing data flow efficiency and application performance.",
      "Led the end-to-end development and deployment of a cross-platform mobile application for monitoring water basin quality, ensuring seamless performance across both iOS and Android platforms."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title">Professional Journey</h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="timeline-item animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="timeline-dot"></div>
              <div className="timeline-content glass">
                <div className="timeline-header">
                  <h3>{exp.role}</h3>
                  <span className="timeline-date">{exp.duration}</span>
                </div>
                <h4 className="timeline-company">{exp.company}</h4>
                <ul className="timeline-details">
                  {exp.description.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
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

export default Experience;
