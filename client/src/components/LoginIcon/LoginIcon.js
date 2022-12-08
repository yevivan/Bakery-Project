import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Navigation from '../Navigation/NavigationIconMenu';
import styles from './LoginIcon.module.scss';

function LoginIcon() {
  return (
    <div className={styles.img}>
      <Navigation account={<PersonOutlineOutlinedIcon />} />
    </div>
  );
}
export default LoginIcon;
