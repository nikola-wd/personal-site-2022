import React from 'react';
import Codeable from '../svg/Codeable';
import Email from '../svg/Email';
import Github from '../svg/Github';
import Linkedin from '../svg/Linkedin';

import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="brand">
        <span>Nikola Ivanov</span>
      </div>
      <small>- note: this website is still not finished... -</small>
      <div className="header__links">
        <a href="mailto:contact@webredone.com">
          <Email />
        </a>
        <a
          href="https://www.linkedin.com/in/nikolaivanovwd/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin />
        </a>
        <a
          href="https://codeable.io/developers/nikola-ivanov/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Codeable />
        </a>
        <a
          href="https://github.com/nikola-wd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </a>
      </div>
    </header>
  );
};

export default Header;
