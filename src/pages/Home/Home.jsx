import React from 'react';
import Header from '../../components/Header/Header';
import WorkWithMe from '../../components/WorkWithMe/WorkWithMe';
import Hero from './Hero/Hero';
import TechStack from './TechStack/TechStack';
import WhoAmI from './WhoAmI/WhoAmI';

const Home = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <WhoAmI />
        <TechStack />
        <WorkWithMe />
      </main>
    </>
  );
};

export default Home;
