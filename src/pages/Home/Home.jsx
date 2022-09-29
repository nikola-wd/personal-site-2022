import React from 'react';
import Header from '../../components/Header/Header';
import LatestBlogPosts from '../../components/LatestBlogPosts/LatestBlogPosts';
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
        <LatestBlogPosts />
      </main>
    </>
  );
};

export default Home;
