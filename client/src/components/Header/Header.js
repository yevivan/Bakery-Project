import React from 'react';

import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import MenuIcon from '../MenuIcon/MenuIcon';

import styles from './Header.module.scss';
import MenuMobile from '../MenuMobile/MenuMobile';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.containerHeader}>
        <Menu />
        <Logo />
        <MenuIcon />
      </div>
      <MenuMobile />

    </div>
  );
}
export default Header;
