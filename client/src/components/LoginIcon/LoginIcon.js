import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useSelector } from 'react-redux';
import Navigation from '../Navigation/NavigationIconMenu';
import styles from './LoginIcon.module.scss';

function LoginIcon({ styleLogin, styleLoginText, style }) {
  const isUserLogged = useSelector((state) => state.userLogin.isUserLogged);
  const loggedUser = useSelector((state) => state.loggedUser.loggedUser);
  const { firstName, lastName } = loggedUser;
  return (
    <div className={`${styleLogin}`}>
      <span className={`${styleLoginText}`}>{isUserLogged ? `${firstName}  ${lastName}` : 'Log In'}</span>
      <Navigation account={<PersonOutlineOutlinedIcon style={style} />} />
    </div>
  );
}
export default LoginIcon;
