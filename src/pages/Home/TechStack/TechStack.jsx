import React from 'react';

import './techstack.scss';

const TechStack = () => {
  const skills = [
    'WordPress',
    'Gutenberg',
    'ACF Pro',
    'React',
    'Next.js',
    'Electron',
    'Gatsby',
    'Vue.js',
    'OOP',
    'Rest API',
    'MySQL',
    'MongoDB',
    'Google Firebase',
    'git',
    'SCSS',
    'PostCSS',
    'BEM',
    'SMACSS',
    'OOCSS',
    'Javascript',
    'ES6',
    'Node JS',
    'Express.js',
    'WebPack',
    'NPM Scripts',
    'Babel',
    'TypeScript',
    'SVG',
    'Canvas',
    'Animation',
    'Command Line',
    'Gulp',
    'HTML5',
    'CSS3',
    'PHP',
    'XAMPP',
    'Docker',
    'AWS',
    'Jira',
    'Trello',
    'Slack',
    'Figma',
    'Sketch',
    'Adobe Xd',
  ];

  return (
    <section className="tech-stack">
      <div className="container">
        <h2 className="sec-title">Tech Stack</h2>
        <p className="sec-body">
          A set of languages, tools, frameworks, methodologies and similar I
          work with on a daily basis.
        </p>
        <div className="tech-stack__grid">
          {skills.map((skill) => (
            <div className="tech-card" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
