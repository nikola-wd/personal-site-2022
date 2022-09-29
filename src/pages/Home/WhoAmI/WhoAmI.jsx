import React from 'react';

const WhoAmI = () => {
  return (
    <section className="who-am-i">
      <div className="container">
        <h2 className="sec-title">Who am I?</h2>
        <p className="sec-body">
          I am a <strong>Full Stack web developer</strong> who's been in the
          industry since 2014.
        </p>
        <p className="sec-body">
          My focus has always been developing scalable, future-proof and
          optimized custom solutions based on tested and proven industry
          standard frameworks such as <strong>WordPress</strong>,{' '}
          <strong>React</strong>,<strong>Next.js</strong> to name a few.
        </p>
        <p className="sec-body">
          Lately, I've been developing custom WordPress themes based on{' '}
          <strong>Gutenberg blocks</strong>, via the{' '}
          <a href="https://webredone.com/theme-redone/">framework</a> I
          developed to standardize and speed up the process.
        </p>
      </div>
    </section>
  );
};

export default WhoAmI;
