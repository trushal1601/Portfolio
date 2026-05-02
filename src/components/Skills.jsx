import React from 'react';
import { 
  SiReact, 
  SiJavascript, 
  SiTypescript, 
  SiFirebase, 
  SiRedux, 
  SiTailwindcss, 
  SiHtml5, 
  SiCss, 
  SiGit,
  SiExpo
} from 'react-icons/si';
import { FaMobileAlt, FaBrain } from 'react-icons/fa';
import './Skills.css';

const skillsData = [
  { name: 'React Native', icon: <FaMobileAlt size={40} />, color: '#61DAFB' },
  { name: 'React.js', icon: <SiReact size={40} />, color: '#61DAFB' },
  { name: 'Expo', icon: <SiExpo size={40} />, color: '#000020' },
  { name: 'JavaScript', icon: <SiJavascript size={40} />, color: '#F7DF1E' },
  { name: 'TypeScript', icon: <SiTypescript size={40} />, color: '#3178C6' },
  { name: 'Redux', icon: <SiRedux size={40} />, color: '#764ABC' },
  { name: 'Firebase', icon: <SiFirebase size={40} />, color: '#FFCA28' },
  { name: 'HTML5', icon: <SiHtml5 size={40} />, color: '#E34F26' },
  { name: 'CSS3', icon: <SiCss size={40} />, color: '#1572B6' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} />, color: '#06B6D4' },
  { name: 'Git & GitHub', icon: <SiGit size={40} />, color: '#F05032' },
  { name: 'Prompt Engineering', icon: <FaBrain size={40} />, color: '#10A37F' },
];

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Technical Expertise</h2>
        <p className="skills-subtitle">
          Technologies and tools I use to build robust mobile and web applications.
        </p>

        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div 
              key={skill.name} 
              className="skill-card glass animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className="skill-icon-wrapper"
                style={{ '--icon-color': skill.color }}
              >
                {skill.icon}
              </div>
              <h3 className="skill-name">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
