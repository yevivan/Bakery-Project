import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';

function Logo() {
  return (
    <div className={styles.Logo}>
      <Link to="/">
        <img
          src="//cdn.shopify.com/s/files/1/1703/7103/t/32/assets/logo_pink.svg?v=102586737249278732631513620398"
          alt="logo"
        />
      </Link>
    </div>
  );
}
export default Logo;
