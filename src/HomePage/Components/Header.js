import React, { useState } from 'react';
import AppThemeColor from '../../AppThemeColor';
import { SocialMedia } from './Data/SocialMedia';
import TypingText from './TypingText';
import { useSelector } from 'react-redux';
import DeveloperImageDark from '../../Assets/Images/svg/Developer1-dark.svg';
import DeveloperImageLight from '../../Assets/Images/svg/Developer1-light.svg';
import './css/HomeComponentStyle.css';

const Header = () => {
  const app_theme = useSelector((state) => state.appTheme);

  const { primaryColor, textColor, commonLightColor, commonDarkColor } =
    AppThemeColor[app_theme];

  const [screenSize, setscreenSize] = useState(window.innerWidth);

  return (
    <header className='header-section'>
      <div className='row header-content-parent'>
        <div className='col-md-7 col-11 header-content'>
          <h3 className='header_greeting_label' style={{ color: textColor }}>
            Hi Peeps,
          </h3>
          <h1
            style={{
              color: primaryColor,
              display: screenSize > 1300 ? 'none' : 'block',
            }}>
            I'm a Software Engineer
          </h1>
          <div
            className='typing-text-parent'
            style={{
              display: screenSize > 1300 ? 'block' : 'none',
            }}>
            <TypingText />
          </div>
          <h5 className='header_summary_aboutme' style={{ color: textColor }}>
            A passionate Software Engineer &nbsp;
            <img
              alt='🚀'
              draggable='false'
              src='https://twemoji.maxcdn.com/2/72x72/1f680.png'
              style={{
                height: '15px',
                width: '15px',
              }}
            />
            &nbsp; having an experience of building Software Applications with
            Javascript / NodeJS and some other useful libraries and frameworks
            like ReactJS, VueJS, C3 Charts etc.
          </h5>
          <h5 className='' style={{ color: primaryColor }}>
            ... and just a HUMAN
          </h5>
          <div className='d-flex flex-column sci-parent'>
            <ul className='sci'>
              {SocialMedia.map((item, index) => (
                <li key={'header_socialmedia_btn' + index}>
                  <a
                    href={item.href}
                    style={{
                      backgroundColor: `${item.bgcolor}`,
                      color: `${commonLightColor}`,
                    }}>
                    <i className={item.cname}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='header_btn_col'>
            <button
              style={{
                backgroundColor: primaryColor,
                color: commonDarkColor,
              }}
              id='get_in_touch_btn'
              className='btn'
              value='Get In Touch'>
              Get In Touch
            </button>
            <a
              href='https://drive.google.com/file/d/1YPN0KPjuVEbiQiOsy62ufsqq_FJQAsYV/view?usp=drivesdk'
              download
              rel='noreferrer'
              target='_blank'>
              <button
                style={{
                  backgroundColor: primaryColor,
                  color: commonDarkColor,
                }}
                id='watch_resume_btn'
                className='btn'
                value='See My Resume'>
                See My Resume
              </button>
            </a>
          </div>
          <div
            className='header-scroll-indication'
            style={{ borderColor: primaryColor }}>
            <h6 style={{ color: primaryColor }}>Scroll for more</h6>
          </div>
        </div>
        <div className='col-md-5 col-11 mt-5 header-image'>
          <figure>
            <img
              src={
                app_theme === 'dark' ? DeveloperImageDark : DeveloperImageLight
              }
              alt='Moon'
              className='img-fluid'
            />
          </figure>
        </div>
      </div>
    </header>
  );
};

export default Header;
