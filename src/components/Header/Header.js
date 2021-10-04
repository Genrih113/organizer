import React from 'react';
import Profile from '../Profile/Profile';
import TimeAndDate from '../TimeAndDate/TimeAndDate';
import AppMenu from '../AppMenu/AppMenu';
import './Header.css';

function Header(props) {

  return (
    <header className="header">
      <Profile />
      <TimeAndDate />
      <AppMenu />
    </header>
  );
}

export default Header;