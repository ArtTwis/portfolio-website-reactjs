import React from "react";
import Base from "../../Base";
import Header from "./Components/Header";
import Passion from "./Components/Passion";
import Career from "./Components/Career";
import SkillSet from "./Components/SkillSet";
import Projects from "./Components/Projects";

const Home = () => {
  useEffect(() => {
    localStorage.setItem("theme", "dark");
  }, [])
  
  return (
    <Base>
      <Header />
      <Passion />
      <Career />
      <SkillSet />
      <Projects />
    </Base>
  );
};

export default Home;
