import React from "react";
import Base from "../../Base";
import "./story.css";
import { StorySection, ImgBox, Content } from "./Story.style";
import { useSelector } from "react-redux";
import AppThemeColor from "../../AppThemeColor";

const Story = () => {
  const app_theme = useSelector((state) => state.appTheme);

  const { primaryColor, textColor } = AppThemeColor[app_theme];

  return (
    <>
      <Base>
        <StorySection>
          <ImgBox>
            <div className="circle"></div>
          </ImgBox>
          <Content className="content-container">
            <h2 style={{ color: primaryColor }}>Hello, I'm Twinkle</h2>
            <p style={{ color: textColor }}>
              I am a passionate and innovative software engineer with over 5
              years of experience. I specialize in translating complex ideas
              into elegant, user-friendly software solutions. My expertise spans
              web application development to desktop tool design, contributing
              to diverse projects across the industry.
            </p>
            <p style={{ color: textColor }}>
              My journey into software engineering started with a passion for
              problem-solving and a dedication to developing technology that
              enhances lives. Throughout my career, I've honed my skills across
              multiple programming languages and remain committed to staying
              current with emerging technologies to excel in the evolving tech
              industry.
            </p>
            <p style={{ color: textColor }}>
              Outside of coding, I enjoy gardening, music, home decor, and
              traveling to diverse destinations. Cooking is also a passion of
              mine. While I cherish trips with loved ones, solo travel fuels my
              sense of adventure as I explore new places independently.
            </p>
            <p style={{ color: textColor }}>
              When not coding, I stay updated on technological advancements and
              contribute to open-source projects. I am passionate about
              mentoring aspiring developers and fostering community growth
              through knowledge sharing.
            </p>
            <p style={{ color: textColor }}>
              Feel free to reach out to me at{" "}
              <a href="mailto:twinkle.goyal0786@gmail.com">
                twinkle.goyal0786@gmail.com
              </a>{" "}
              or connect with me on{" "}
              <a href="https://www.linkedin.com/in/goyaltwinkle/">LinkedIn</a> /{" "}
              <a href="https://github.com/ArtTwis">Github</a> , and let's start
              a conversation about how I can contribute to your next exciting
              project!
            </p>
          </Content>
        </StorySection>
      </Base>
    </>
  );
};

export default Story;
