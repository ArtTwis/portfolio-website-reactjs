import React from 'react';
import Base from '../Base';
import Header from './Components/Header';
import Passion from './Components/Passion';
import Career from './Components/Career';
import SkillSet from './Components/SkillSet';

const Home = () => {
  return (
    <Base>
      <Header />
      <Passion />
      <Career />
      <SkillSet />
    </Base>
  );
};

export default Home;
