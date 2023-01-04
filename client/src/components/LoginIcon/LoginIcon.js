import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Navigation from '../Navigation/NavigationIconMenu';
// import styles from './LoginIcon.module.scss';

function LoginIcon({ styleLogin, styleLoginText, style }) {
  const loggedUser = useSelector((state) => state.loggedUser.loggedUser);
  const { firstName, lastName } = loggedUser;

  return (
    <div className={`${styleLogin}`}>
      <span className={`${styleLoginText}`}>{loggedUser ? `${firstName}  ${lastName}` : 'Log In'}</span>
      <Navigation login={<PersonOutlineOutlinedIcon style={style} />} />
    </div>
  );
}
export default LoginIcon;
