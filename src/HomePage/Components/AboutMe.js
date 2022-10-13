import React from 'react';
import { Technologies } from './Data/Technologies';
import AppThemeColor from '../../AppThemeColor';
import { useSelector } from 'react-redux';
import './css/HomeComponentStyle.css';

// To add Animation in Tech-Stack cards add reveal class in card className....

const AboutMe = () => {
  const app_theme = useSelector((state) => state.appTheme);

  const { primaryColor, textColor } = AppThemeColor[app_theme];

  return (
    <div className='aboutme-section'>
      <h1 style={{ color: textColor, textAlign: 'center' }}>About Me</h1>
      <h2 style={{ color: primaryColor }}>A bit about me</h2>
      <p style={{ color: textColor }}>
        I'm a self-taught&nbsp;
        <span style={{ color: primaryColor }}>Full-Stack Web Developer</span>
        &nbsp;and&nbsp;
        <span style={{ color: primaryColor }}>Mobile App Developer</span>
        &nbsp;with experience in designing new features from ideation to
        production, implementation of wireframes and design flows into high
        performance software applications. I take into consideration the user
        experience while writing reusable and efficient code. I passionately
        combine good design, technology, and innovation in all my projects,
        which I like to accompany from the first idea to release.Currently, I'm
        focused on the backend development.
      </p>
      <h2 style={{ color: primaryColor }}>Technologies and Tools</h2>
      <p style={{ color: textColor }}>
        Using a combination of cutting-edge technologies and reliable
        open-source software I build user-focused, performant apps and websites
        for smartphones, tablets, and desktops.
      </p>
      <div className='technologies-parent-dv'>
        {Technologies.map((techItem, index) => {
          return (
            <div
              key={'tech-icon-' + techItem.technology}
              className={`technology-item ${
                app_theme === 'dark'
                  ? 'technology-card-dark'
                  : 'technology-card-light'
              }`}>
              <img src={techItem.techicon} alt='Tech' />
              <h6 style={{ color: textColor }}>{techItem.technology}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutMe;
