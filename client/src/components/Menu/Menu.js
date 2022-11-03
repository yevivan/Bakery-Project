import MenuIcon from '@mui/icons-material/Menu';
import Navigation from '../Navigation/NavigationMenu';
import styles from './Menu.module.scss';

function Menu() {
  return (
    <>
      <MenuIcon className={styles.burgerMenu} />
      <div className={styles.menu}>
        <Navigation
          catalog={<p>All item</p>}
          category1={<p>category1</p>}
          category2={<p>category2</p>}
          category3={<p>category3</p>}
          category4={<p>category4</p>}
        />
      </div>
    </>
  );
}
export default Menu;
