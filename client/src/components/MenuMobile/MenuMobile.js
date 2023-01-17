import { useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import Search from '../Search/Search';
import ButtonComponent from '../Button/ButtonComponent';
import Navigation from '../Navigation/NavigationMenu';
import styles from './MenuMobile.module.scss';
import LoginIcon from '../LoginIcon/LoginIcon';
import MenuLogIn from '../MenuLogIn/MenuLogIn';

function MenuMobile() {
  const menuMobile = useSelector((state) => state.menuMobile.menuMobile);
  const loggedUser = useSelector((state) => state.loggedUser.loggedUser);
  const { isAdmin } = loggedUser;
  const [menuLog, setMenuLog] = useState(false);

  return (
    <div className={styles.menuList} style={menuMobile ? { transform: 'translate(0, 0)' } : { transform: 'translate(0, -100%)' }}>
      <Search styles={{ width: '100%', height: '40px', display: 'flex' }} stylesLabel={{ flexGrow: '1', height: '40px' }} stylesInput={{ width: '100%', height: '100%', opacity: '1' }} props={<ButtonComponent text="Search" style={{ height: '100%' }} />} />
      <Navigation
        styleMenu={styles.menu}
        style={styles.menuItem}
        catalog={<p>All products</p>}
        cake={<p>Cake</p>}
        cheesecake={<p>Cheesecake</p>}
        tarts={<p>Tarts</p>}
        pastries={<p>Pastries</p>}
      />
      <button className={styles.btnMobAccount} onClick={() => { setMenuLog(true); }}>
        <LoginIcon styleLogin={styles.btnAccount} styleBtnLogin={styles.btnLogin} styleLoginText={styles.textAccount} menuLogIn={styles.menuNone} btnLoginMenu={styles.btnLoginMenu} styleIconAdmin={{ fontSize: '50', color: '#fce5f2' }} styleIcon={{ fontSize: '50', color: '#f09ec4' }} style={{ color: '#f09ec4', fontSize: '50' }} />
      </button>
      <div className={styles.containerMenuLogIn} onClick={() => { setMenuLog(false); }} style={menuLog ? { transform: 'translate(-20px, -20px)' } : { transform: 'translate(calc(-100% - 20px), -20px)' }}>
        <button type="button" onClick={() => { setMenuLog(false); }} className={styles.btnClose}><CloseIcon style={{ width: '100%', height: 'auto', color: '#391113' }} /></button>
        <MenuLogIn isAdmin={isAdmin} menuLogIn={styles.menuLogIn} btnLoginMenu={styles.btnLoginMenu} styleIconAdmin={{ width: '100%', height: 'auto', color: '#391113' }} styleIcon={{ width: '100%', height: 'auto', color: '#391113' }} style={{ color: '#f09ec4', fontSize: '50' }} />
      </div>

    </div>

  );
}

export default MenuMobile;
