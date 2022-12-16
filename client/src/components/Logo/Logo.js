import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';
import logoPink from '../../svg/logo_pink.svg';

function Logo() {
  return (
    <div className={styles.logo}>
      <div className={styles.logoDiv}>
        <Link to="/">
          <img
            src={logoPink}
            alt="logo"
          />
        </Link>
      </div>
    </div>
  );
}
export default Logo;
