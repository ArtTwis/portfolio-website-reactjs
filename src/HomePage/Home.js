import React from 'react';
import Base from '../Base';
import Header from './Components/Header';
import AboutMe from './Components/AboutMe';
import Career from './Components/Career';

const Home = () => {
  return (
    <Base>
      <Header />
      <AboutMe />
      <Career />
    </Base>
  );
};

export default Home;
