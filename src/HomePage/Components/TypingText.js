import React from 'react';
import AppThemeColor from '../../AppThemeColor';
import Typewriter from 'typewriter-effect';
import { useSelector } from 'react-redux';

const TypingText = () => {
  const app_theme = useSelector((state) => state.appTheme);

  const { primaryColor, textColor, secondaryColor } = AppThemeColor[app_theme];

  const val = `drop-shadow(0 0 20px ${secondaryColor}) drop-shadow(0 0 30px ${primaryColor})`;

  return (
    <h1 style={{ color: textColor, filter: val }}>
      {' '}
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString('Full-Stack Developer')
            .pauseFor(2000)
            .deleteAll()
            .typeString('Cloud Computing')
            .pauseFor(2000)
            .deleteAll()
            .start();
        }}
        options={{
          loop: true,
        }}
      />
    </h1>
  );
};

export default TypingText;
