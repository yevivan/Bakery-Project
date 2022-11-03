import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Navigation from '../Navigation/NavigationIconMenu';

function MenuIcon() {
  return (
    <div>
      <Navigation basket={<ShoppingBasketIcon />} />
    </div>
  );
}
export default MenuIcon;
