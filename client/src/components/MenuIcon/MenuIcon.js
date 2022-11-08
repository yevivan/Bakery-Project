import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Navigation from '../Navigation/NavigationIconMenu';
import styles from './MenuIcon.module.scss';

function MenuIcon() {
  return (
    <div className={styles.img}>
      <Navigation basket={<ShoppingBasketIcon />} />
    </div>
  );
}
export default MenuIcon;
