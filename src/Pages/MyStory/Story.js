import React from "react";
import Base from "../../Base";
import myImage from "../../Assets/Images/gallery/Twinkle_Image.jpg";
import { StorySection, ImgBox, MyImageElement, Content } from "./Story.style";
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
            <MyImageElement src={myImage} alt='Myself' />
          </ImgBox>
          <Content className='content'>
            <h2 style={{ color: primaryColor }}>Hello, I'm Twinkle</h2>
            <p style={{ color: textColor }}>
              A passionate and innovative software engineer with a deep love for technology and a knack for turning complex ideas into elegant, user-friendly software solutions. With 3 years of experience in the industry, I've had the privilege of working on a multiple projects, from building web applications to desktop tools.
            </p>
            <p style={{ color: textColor }}>
              My journey in the world of software began with a fascination for problem-solving and a desire to create technology that enhances people's lives. Over the years, I've honed my skills in various programming languages and I'm always excited to dive into new technologies to stay at the forefront of the ever-evolving tech landscape.
            </p>
            <p style={{ color: textColor }}>
              My hobbies are Gardening, Listening music, Home decor and Travelling to diffrent areas. Along with this, I also like cooking. I love friends’ trips and family outings but solo travelling brings me the real adventure and thrill to venture into new places all by myself.
            </p>
            <p style={{ color: textColor }}>
              When I'm not immersed in code, you'll likely find me exploring the latest developments in technology or contributing to open-source projects and I'm always eager to mentor aspiring developers and share my knowledge.
            </p>
            <p style={{ color: textColor }}>
              Feel free to reach out to me at <a href="mailto:art.twis@gmail.com">art.twis@gmail.com</a> or connect with me on <a href="https://www.linkedin.com/in/goyaltwinkle/">LinkedIn</a> / <a href="https://github.com/ArtTwis">Github</a> , and let's start a conversation about how I can contribute to your next exciting project!
            </p>
          </Content>
        </StorySection>
      </Base>
    </>
  );
};

export default Story;
