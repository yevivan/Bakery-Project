import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import Navigation from '../Navigation/NavigationMenu';
import styles from './Menu.module.scss';
import menuSvg from '../../svg/menu.svg';
import { changeMenuMobile } from '../../store/slices/menuMobileSlices';

function Menu() {
  const menuMobile = useSelector((state) => state.menuMobile.menuMobile);
  console.log(menuMobile);
  const dispatch = useDispatch();
  return (

    <div className={styles.menuContainer}>

      <button
        onClick={() => {
          dispatch(changeMenuMobile(menuMobile));
        }}
        type="button"
        className={styles.burgerBtn}
      >
        {menuMobile ? <CloseIcon style={{ color: '#f09ec4', fontSize: '30' }} /> : <img src={menuSvg} alt="menu" />}
      </button>

      <Navigation
        styleMenu={styles.menu}
        style={styles.menuItem}
        catalog={<p>All products</p>}
        cake={<p>Cake</p>}
        cheesecake={<p>Cheesecake</p>}
        tarts={<p>Tarts</p>}
        pastries={<p>Pastries</p>}
      />

    </div>

  );
}
export default Menu;
