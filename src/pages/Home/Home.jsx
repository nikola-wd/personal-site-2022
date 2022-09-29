import React from 'react';
import Header from '../../components/Header/Header';
import Hero from './Hero/Hero';

const Home = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
      </main>
    </>
  );
};

export default Home;
