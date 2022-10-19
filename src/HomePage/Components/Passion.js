import React from 'react';
import { useSelector } from 'react-redux';
import AppThemeColor from '../../AppThemeColor';

const Passion = () => {
  const app_theme = useSelector((state) => state.appTheme);

  const { primaryColor, textColor, secondaryColor } = AppThemeColor[app_theme];

  return (
    <div
      id='intro'
      className='relative'
      style={{ backgroundColor: secondaryColor }}>
      <div className='intro min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-3 flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-7xl tracking-tight font-semibold'>
        <div className='leading-[1.15]'>
          <p className='introText' style={{ color: textColor }}>
            I love coding.
          </p>
          <p className='introText' style={{ color: primaryColor }}>
            I use my passion and skills to build digital products and
            experiences.
          </p>
          <p className='introText' style={{ color: textColor }}>
            I'm passionate about cutting-edge, pixel perfect UI and intuitively
            implemented UX.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Passion;

{
  /* <p style={{ color: textColor }}>
  I'm a self-taught&nbsp;
  <span style={{ color: primaryColor }}>Full-Stack Web Developer</span>
  &nbsp;and&nbsp;
  <span style={{ color: primaryColor }}>Mobile App Developer</span>
  &nbsp;with experience in designing new features from ideation to production,
  implementation of wireframes and design flows into high performance software
  applications. I take into consideration the user experience while writing
  reusable and efficient code. I passionately combine good design, technology,
  and innovation in all my projects, which I like to accompany from the first
  idea to release.Currently, I'm focused on the backend development.
</p>; */
}
