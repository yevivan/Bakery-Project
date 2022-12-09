import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Navigation from '../Navigation/NavigationIconMenu';
import styles from './MenuIcon.module.scss';
// import search from '../../svg/search.svg';
// import Search from '../Search/Search';
import Search from '../Search/Search';
import searchSvg from '../../svg/search.svg';
import closeSvg from '../../svg/close.svg';

function MenuIcon() {
  const itemsInCart = useSelector((state) => state.cartItemsFromServer.cartItemsFromServer);
  const { products } = itemsInCart;
  const [openInputSearch, setOpenInputSearch] = useState(false);
  const openSearch = () => {
    setOpenInputSearch((prev) => !prev);
  };
  return (
    <div className={styles.menuIcon}>

      {openInputSearch ? (
        <>
          <button className={styles.btn} onClick={openSearch}>
            <img src={closeSvg} alt="search" />
          </button>
          <Search style={{ transition: '2s' }} />
        </>
      ) : (
        <button className={styles.btn} onClick={openSearch}>
          <img src={searchSvg} alt="search" />
        </button>
      ) }

      <span>
        {products ? products.length : null}
        <Navigation

          basket={<ShoppingBasketIcon />}
        />
        {' '}

      </span>

    </div>
  );
}
export default MenuIcon;
