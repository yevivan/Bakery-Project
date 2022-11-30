import React from 'react';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import MenuIcon from '../MenuIcon/MenuIcon';
import LoginIcon from '../LoginIcon/LoginIcon';
import styles from './Header.module.scss';

function Header() {
  return (
    <div className={styles.header}>
      <Menu />
      <Logo />
      <MenuIcon />
      <LoginIcon />
    </div>
  );
}
export default Header;
