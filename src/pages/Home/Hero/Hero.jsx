import React from 'react';

import './hero.scss';

const Hero = () => {
  return (
    <div className="hero">
      <img
        src={
          process.env.PUBLIC_URL +
          '/img/nikola-ivanov-wd-custom-wordpress-developer.jpg'
        }
        alt="Nikola Ivanov WebRedone Custom Wordpress Developer"
      />
      <div className="container">
        <div className="hero__content">
          <h1>Nikola Ivanov</h1>
          <p>
            Full Stack web developer with <strong>more than 8 years</strong> of
            experience and <strong>400+</strong>
            finished projects. Currently focusing on{' '}
            <strong>WordPress Gutenberg</strong>, <strong>React</strong> apps
            development and <strong>SVG animation</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
