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
            <h2 style={{ color: primaryColor }}>I'm Twinkle</h2>
            <p style={{ color: textColor }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aut
              nemo animi officiis molestias soluta optio dicta ducimus quisquam
              obcaecati assumenda vel amet dolore, modi placeat excepturi
              tempora rem repellat ipsa ipsam aliquam maiores reprehenderit.
              Dolores possimus pariatur a, assumenda veritatis culpa.
            </p>
            <p style={{ color: textColor }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aut
              nemo animi officiis molestias soluta optio dicta ducimus quisquam
              obcaecati assumenda vel amet dolore, modi placeat excepturi
              tempora rem repellat ipsa ipsam aliquam maiores reprehenderit.
              Dolores possimus pariatur a, assumenda veritatis culpa.
            </p>
            <p style={{ color: textColor }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aut
              nemo animi officiis molestias soluta optio dicta ducimus quisquam
              obcaecati assumenda vel amet dolore, modi placeat excepturi
              tempora rem repellat ipsa ipsam aliquam maiores reprehenderit.
              Dolores possimus pariatur a, assumenda veritatis culpa.
            </p>
            <p style={{ color: textColor }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aut
              nemo animi officiis molestias soluta optio dicta ducimus quisquam
              obcaecati assumenda vel amet dolore, modi placeat excepturi
              tempora rem repellat ipsa ipsam aliquam maiores reprehenderit.
              Dolores possimus pariatur a, assumenda veritatis culpa.
            </p>
            <p style={{ color: textColor }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aut
              nemo animi officiis molestias soluta optio dicta ducimus quisquam
              obcaecati assumenda vel amet dolore, modi placeat excepturi
              tempora rem repellat ipsa ipsam aliquam maiores reprehenderit.
              Dolores possimus pariatur a, assumenda veritatis culpa.
            </p>
            <p style={{ color: textColor }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aut
              nemo animi officiis molestias soluta optio dicta ducimus quisquam
              obcaecati assumenda vel amet dolore, modi placeat excepturi
              tempora rem repellat ipsa ipsam aliquam maiores reprehenderit.
              Dolores possimus pariatur a, assumenda veritatis culpa.
            </p>
            <p style={{ color: textColor }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aut
              nemo animi officiis molestias soluta optio dicta ducimus quisquam
              obcaecati assumenda vel amet dolore, modi placeat excepturi
              tempora rem repellat ipsa ipsam aliquam maiores reprehenderit.
              Dolores possimus pariatur a, assumenda veritatis culpa.
            </p>
            <p style={{ color: textColor }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aut
              nemo animi officiis molestias soluta optio dicta ducimus quisquam
              obcaecati assumenda vel amet dolore, modi placeat excepturi
              tempora rem repellat ipsa ipsam aliquam maiores reprehenderit.
              Dolores possimus pariatur a, assumenda veritatis culpa.
            </p>
            <p style={{ color: textColor }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aut
              nemo animi officiis molestias soluta optio dicta ducimus quisquam
              obcaecati assumenda vel amet dolore, modi placeat excepturi
              tempora rem repellat ipsa ipsam aliquam maiores reprehenderit.
              Dolores possimus pariatur a, assumenda veritatis culpa.
            </p>
            <p style={{ color: textColor }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aut
              nemo animi officiis molestias soluta optio dicta ducimus quisquam
              obcaecati assumenda vel amet dolore, modi placeat excepturi
              tempora rem repellat ipsa ipsam aliquam maiores reprehenderit.
              Dolores possimus pariatur a, assumenda veritatis culpa.
            </p>
            <p style={{ color: textColor }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit aut
              nemo animi officiis molestias soluta optio dicta ducimus quisquam
              obcaecati assumenda vel amet dolore, modi placeat excepturi
              tempora rem repellat ipsa ipsam aliquam maiores reprehenderit.
              Dolores possimus pariatur a, assumenda veritatis culpa.
            </p>
          </Content>
        </StorySection>
      </Base>
    </>
  );
};

export default Story;
