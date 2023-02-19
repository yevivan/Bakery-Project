import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
// import SettingsIcon from '@mui/icons-material/Settings';
// import LogoutIcon from '@mui/icons-material/Logout';
// import EngineeringIcon from '@mui/icons-material/Engineering';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { setIsOpenModal } from '../../store/slices/modalWSlices';
import MenuLogIn from '../MenuLogIn/MenuLogIn';

function LoginIcon({
  styleLogin, styleLoginText, style, styleBtnLogin, menuLogIn, btnLoginMenu, styleIcon, styleIconAdmin,
}) {
  // const dispatch = useDispatch();
  const isUserLogged = useSelector((state) => state.userLogin.isUserLogged);
  const loggedUser = useSelector((state) => state.loggedUser.loggedUser);
  const { firstName, lastName, isAdmin } = loggedUser;

  return (
    <div className={`${styleLogin}`}>

      {isUserLogged
        ? (
          <>
            <div type="button" className={`${styleBtnLogin}`}>
              <span className={`${styleLoginText}`}>

                {firstName}
                <br />

                {lastName}

              </span>
              <PersonOutlineOutlinedIcon style={style} />
            </div>
            <MenuLogIn menuLogIn={menuLogIn} btnLoginMenu={btnLoginMenu} styleIcon={styleIcon} styleIconAdmin={styleIconAdmin} isAdmin={isAdmin} />

          </>

        )
        : (
          <NavLink to="/login" className={`${styleBtnLogin}`}>
            <>
              <span className={`${styleLoginText}`}>Log In</span>
              <PersonOutlineOutlinedIcon style={style} />
            </>
          </NavLink>
        )}

    </div>
  );
}
export default LoginIcon;
