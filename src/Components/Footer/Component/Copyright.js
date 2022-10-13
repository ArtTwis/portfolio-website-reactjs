import React from 'react';
import './Copyright.css';
import AppThemeColor from '../../../AppThemeColor';
import { useSelector } from 'react-redux';

const Copyright = () => {
  const app_theme = useSelector((state) => state.appTheme);

  const { primaryColor, textColor, copyrightBar } = AppThemeColor[app_theme];

  return (
    <div
      className='copyrightText'
      style={{ backgroundColor: `${copyrightBar}` }}>
      <p style={{ color: `${textColor}` }}>
        Copyright © 2022 ArtTwis. All Right Reserved. Designed By&nbsp;
        <a
          href='https://arttwis.github.io'
          style={{ color: `${primaryColor}` }}>
          Twinkle Goyal
        </a>
      </p>
    </div>
  );
};

export default Copyright;
