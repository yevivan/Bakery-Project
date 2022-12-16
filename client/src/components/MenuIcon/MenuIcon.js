import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useState } from 'react';
import { useSelector } from 'react-redux';
// import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import Navigation from '../Navigation/NavigationIconMenu';
import styles from './MenuIcon.module.scss';
import Search from '../Search/Search';
import LoginIcon from '../LoginIcon/LoginIcon';

function MenuIcon() {
  const itemsInCartInDatabase = useSelector(
    (state) => state.cartItemsFromServer.cartItemsFromServer,
  );
  const isuserLoggedIn = useSelector((state) => state.userLogin.isUserLogged);
  const itemsInCartInLocalStorage = useSelector((state) => state.basketArr.basketArr);
  const { products } = itemsInCartInDatabase;
  const itemsCountInCartInDatabse = products ? products.length : 0;
  const itemsCountInCartInLocalStorage = itemsInCartInLocalStorage.length;

  const [openInputSearch, setOpenInputSearch] = useState(false);
  const openSearch = () => {
    setOpenInputSearch((prev) => !prev);
  };

  return (
    <div className={styles.menuIcon}>

      {openInputSearch ? (
        <>
          <button className={styles.btn} onClick={openSearch}>

            <CloseIcon />
          </button>
          <Search style={{ transition: '2s' }} props={<SearchIcon />} />
        </>
      ) : (
        <button className={styles.btn} onClick={openSearch}>

          <SearchIcon />
        </button>
      ) }
      {/* <div className={styles.imgAccount}> */}
      {/*  <Navigation account={<PersonOutlineOutlinedIcon />} /> */}
      {/* </div> */}

      <LoginIcon />
      <span>
        {isuserLoggedIn ? itemsCountInCartInDatabse : itemsCountInCartInLocalStorage}
        <Navigation
          basket={<ShoppingBasketIcon />}
        />
        {' '}

      </span>

    </div>
  );
}
export default MenuIcon;
