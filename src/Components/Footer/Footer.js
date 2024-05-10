import React from 'react';
import AppThemeColor from '../../AppThemeColor';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Footer.css';
import { SocialMedia } from './SocialMedia';
import { QuickLinks } from './QuickLinks';

const Footer = () => {
  const app_theme = useSelector((state) => state.appTheme);

  const { primaryColor, textColor, secondaryColor, bodyBgColor } =
    AppThemeColor[app_theme];

  const Navigate = useNavigate();

  return (
    <div>
      <footer style={{ backgroundColor: `${secondaryColor}` }}>
        <div className='container'>
          <div className='sec aboutme'>
            <h2
              style={{
                color: `${primaryColor}`,
              }}>
              Twinkle Goyal
            </h2>
            <p style={{ color: `${textColor}` }}>
              A passionate Software Engineer having an experience of building
              Software Applications with JavaScript / Nodejs and some other
              useful libraries and frameworks.
            </p>
            <ul className='sci'>
              {SocialMedia.map((item, index) => (
                <li key={'footer_socialmedia_btn' + index}>
                  <a
                    href={item.href}
                    style={{
                      backgroundColor: `${bodyBgColor}`,
                      color: `${textColor}`,
                    }}>
                    <i className={item.cname}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className='sec quickLinks'>
            <h2 style={{ color: `${textColor}` }}>Quick Links</h2>
            <ul>
              {QuickLinks.map((item, index) => (
                <li key={'footer_quicklink' + index}>
                  <a href={item.href} style={{ color: `${textColor}` }}>
                    {item.link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className='sec contact'>
            <h2 style={{ color: `${textColor}` }}>Contact Us</h2>
            <ul className='info'>
              <li>
                <span>
                  <i
                    className='fas fa-map-marker-alt'
                    style={{ color: `${textColor}` }}></i>
                </span>
                <span style={{ color: `${textColor}` }}>
                  Gopi Ram Pawan Kumar, WN. 13
                  <br />
                  Siidarth Store, Aggarsain Market,
                  <br />
                  Sangaria, 335063
                  <br />
                  Distt: Hanumangarh, Rajasthan
                </span>
              </li>
              <li>
                <span>
                  <i
                    className='fas fa-phone'
                    style={{ color: `${textColor}` }}></i>
                </span>
                <p>
                  <a href='tel:919414425618' style={{ color: `${textColor}` }}>
                    +91-9414425618
                  </a>
                  <br />
                  <a href='tel:918118844518' style={{ color: `${textColor}` }}>
                    +91-8118844518
                  </a>
                </p>
              </li>
              <li>
                <span>
                  <i
                    className='fas fa-envelope'
                    style={{ color: `${textColor}` }}></i>
                </span>
                <p>
                  <a
                    href='mailto:art.twis@gmail.com'
                    style={{ color: `${textColor}` }}>
                    twinkle.goyal0786@gmail.com
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
