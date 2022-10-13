import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AppThemeColor from '../../AppThemeColor';
import CertificateImageDark from '../../Assets/Images/svg/Certification-dark.svg';
import CertificateImageLight from '../../Assets/Images/svg/Certification-light.svg';
import './css/HomeComponentStyle.css';

const SeeMyself = () => {
  const app_theme = useSelector((state) => state.appTheme);

  const { primaryColor, textColor } = AppThemeColor[app_theme];

  const [screenSize, setscreenSize] = useState(window.innerWidth);

  return (
    <div className='see-myself-section'>
      <div className='row see-myself-content-parent'>
        <div className='col-md-5 col-11 mt-5 header-image'>
          <figure>
            <img
              src={
                app_theme === 'dark'
                  ? CertificateImageDark
                  : CertificateImageLight
              }
              alt='Skills'
              className='img-fluid'
            />
          </figure>
        </div>
        <div className='col-md-7 col-11 see-myself-content'></div>
      </div>
    </div>
  );
};

export default SeeMyself;
