import { Link } from 'react-router-dom';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useSelector } from 'react-redux';
import Search from '../Search/Search';
import ButtonComponent from '../Button/ButtonComponent';
import Navigation from '../Navigation/NavigationMenu';
import styles from './MenuMobile.module.scss';

function MenuMobile() {
  const menuMobile = useSelector((state) => state.menuMobile.menuMobile);
  return (
    <div className={styles.menuList} style={menuMobile ? { transform: 'translate(0, 0)' } : { transform: 'translate(0, -100%)' }}>
      <Search styles={{ width: '100%', height: '40px', display: 'flex' }} stylesLabel={{ flexGrow: '1', height: '40px' }} stylesInput={{ width: '100%', height: '100%' }} props={<ButtonComponent text="Search" style={{ height: '100%' }} />} />
      <Navigation
        styleMenu={styles.menu}
        style={styles.menuItem}
        catalog={<p>All products</p>}
        cake={<p>Cake</p>}
        cheesecake={<p>Cheesecake</p>}
        tarts={<p>Tarts</p>}
        pastries={<p>Pastries</p>}
      />
      <div>
        <Link to="/account">
          <div className={styles.btnAccount}>
            <div className={styles.icon}><PersonOutlineOutlinedIcon style={{ color: '#f09ec4', fontSize: '40' }} /></div>
            <p className={styles.textAccount}>MY ACCOUNT</p>
          </div>

        </Link>
      </div>
    </div>

  );
}

export default MenuMobile;
