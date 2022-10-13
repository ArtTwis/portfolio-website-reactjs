import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { MenuItem } from './MenuItem';
import ThemeButton from './Component/ThemeButton';
import AppThemeColor from '../../AppThemeColor';
import { useSelector } from 'react-redux';
import './Navbar.css';

const Navbar = () => {
  const logoName = '<Twinkle Goyal />';

  const app_theme = useSelector((state) => state.appTheme);

  const { primaryColor, activeTextColor, textColor } = AppThemeColor[app_theme];

  const Navigate = useNavigate();

  return (
    <nav className='navbar navbar-expand-lg justify-content-between'>
      <label
        className='navbar-brand'
        style={{
          color: `${primaryColor}`,
        }}
        onClick={() => {
          Navigate('/');
        }}>
        {logoName}
      </label>

      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarTogglerDemo02'
        aria-controls='navbarTogglerDemo02'
        aria-expanded='false'
        aria-label='Toggle navigation'
        style={{
          backgroundColor: `${primaryColor}`,
        }}>
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
        <ul className='navbar-nav navbar-nav-list mr-auto mt-2 mt-lg-0'>
          {MenuItem.map((menuItem, index) => (
            <li className='nav-item active' key={index}>
              <NavLink
                className={`${menuItem.cname}`}
                style={({ isActive }) => {
                  return {
                    backgroundColor: isActive
                      ? `${primaryColor}`
                      : 'transparent',
                    color: isActive ? `${activeTextColor}` : `${textColor}`,
                  };
                }}
                to={`${menuItem.url}`}>
                {menuItem.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <ThemeButton />
      </div>
    </nav>
  );
};

export default Navbar;
