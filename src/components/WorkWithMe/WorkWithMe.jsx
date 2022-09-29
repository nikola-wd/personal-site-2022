import React from 'react';

import './workwithme.scss';

const WorkWithMe = () => {
  return (
    <section className="work-with-me">
      <div className="container">
        <h2 className="sec-title">Interested in working with me?</h2>

        <p className="sec-body">
          While I am still technically a freelancer, back in 2018 I've teamed up
          with a good friend of mine, Stefan, and we are now a team of two,
          known as <strong>webredone.com</strong>
        </p>

        <p className="sec-body">
          Find out more about us, our services, processes, projects, past
          clients and don't hesitate to send us a message if you feel like
          working with us :)
        </p>

        <a className="main-cta" href="https://webredone.com">
          webredone
        </a>
      </div>
    </section>
  );
};

export default WorkWithMe;
