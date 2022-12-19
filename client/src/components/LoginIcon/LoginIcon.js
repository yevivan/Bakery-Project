import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useSelector } from 'react-redux';
import Navigation from '../Navigation/NavigationIconMenu';
import styles from './LoginIcon.module.scss';

function LoginIcon() {
  const isUserLogged = useSelector((state) => state.userLogin.isUserLogged);
  const loggedUser = useSelector((state) => state.loggedUser.loggedUser);
  const { firstName, lastName } = loggedUser;
  return (
    <div className={styles.img}>
      <span>{isUserLogged ? `${firstName}  ${lastName}` : 'Log In'}</span>
      <Navigation login={<PersonOutlineOutlinedIcon />} />
    </div>
  );
}
export default LoginIcon;
