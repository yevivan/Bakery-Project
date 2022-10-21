import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import MenuIcon from '../MenuIcon/MenuIcon';
import styles from './Header.module.scss';

function Header() {
  return (
    <div className={styles.header}>
      <Menu />
      <Logo />
      <MenuIcon />
    </div>
  );
}
export default Header;
