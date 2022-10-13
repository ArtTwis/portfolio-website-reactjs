import React, { useState } from 'react';
import AppThemeColor from '../../../AppThemeColor';
import './ThemeButton.css';
import SunIcon from '../../../Assets/Icons/sun.png';
import MoonIcon from '../../../Assets/Icons/moon.png';
import { useSelector, useDispatch } from 'react-redux';
import { appTheme } from '../../../actions';

const ThemeButton = () => {
  const app_theme = useSelector((state) => state.appTheme);

  const dispatch = useDispatch();

  const [hover, setHover] = useState(false);

  const { primaryColor, textColor } = AppThemeColor[app_theme];

  const setTheme = () => {
    dispatch(appTheme());

    document.body.style.backgroundColor =
      app_theme === 'light' ? '#202124' : '#f5f5f5';
  };

  const onMouseEnter = () => {
    setHover(true);
  };

  const onMouseLeave = () => {
    setHover(false);
  };

  return (
    <button
      className='btn theme-btn my-2 my-sm-0'
      type='button'
      style={{
        color: `${textColor}`,
        borderColor: `${hover ? primaryColor : textColor}`,
        backgroundColor: `${hover ? primaryColor : 'transparent'}`,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={setTheme}>
      {app_theme === 'light' ? 'Dark' : 'Light'}
      <img alt='Theme Icon' src={app_theme === 'light' ? MoonIcon : SunIcon} />
    </button>
  );
};

export default ThemeButton;
