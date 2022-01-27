import React from 'react';
import logo from '../logo.svg';

const Header = () => {
  return <nav className='header-nav'>
        <img className='header-logo' src={logo} alt="logo"/>
      <a href="#s">Главная</a>
      <a href="#s">Сервисы</a>
      <a href="#s">Каталог</a>
      <a href="#s">Контакты</a>
  </nav>;
};

export default Header;
