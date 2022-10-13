import React from 'react';
import Base from '../Base';
import Header from './Components/Header';
import AboutMe from './Components/AboutMe';
import SeeMyself from './Components/SeeMyself';

const Home = () => {
  return (
    <Base>
      <Header />
      <AboutMe />
      <SeeMyself />
    </Base>
  );
};

export default Home;
