import React from 'react';
import { useSelector } from 'react-redux';
import AppThemeColor from './AppThemeColor';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Copyright from './Components/Footer/Component/Copyright';

const Base = ({ children }) => {
  const app_theme = useSelector((state) => state.appTheme);

  const { bodyBgColor } = AppThemeColor[app_theme];

  return (
    <div style={{ backgroundColor: bodyBgColor }}>
      <Navbar />
      <div className='container-fluid content-container base-child-component'>
        {children}
      </div>
      <Footer />
      <Copyright />
    </div>
  );
};

export default Base;
