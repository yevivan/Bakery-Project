import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import EngineeringIcon from '@mui/icons-material/Engineering';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setIsOpenModal } from '../../store/slices/modalWSlices';
import MenuLogIn from '../MenuLogIn/MenuLogIn';

function LoginIcon({
  styleLogin, styleLoginText, style, styleBtnLogin, menuLogIn, btnLoginMenu, styleIcon, styleIconAdmin,
}) {
  const dispatch = useDispatch();
  const isUserLogged = useSelector((state) => state.userLogin.isUserLogged);
  const loggedUser = useSelector((state) => state.loggedUser.loggedUser);
  console.log(loggedUser);
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
            {/* <div className={`${menuLogIn}`}> */}
            {/*  <NavLink to="/account" className={`${btnLoginMenu}`}> */}
            {/*    <SettingsIcon style={styleIcon} /> */}
            {/*  </NavLink> */}
            {/*  <button type="button" className={`${btnLoginMenu}`} onClick={() => dispatch(setIsOpenModal(true))}> */}
            {/*    <LogoutIcon style={styleIcon} /> */}
            {/*  </button> */}
            {/*  {isAdmin && <NavLink to="admin" className={`${btnLoginMenu}`}><EngineeringIcon style={styleIconAdmin} /></NavLink>} */}
            {/* </div> */}
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

      {/* <span className={`${styleLoginText}`}>{isUserLogged ? `${firstName}  ${lastName}` : 'Log In'}</span> */}
      {/* <Navigation login={( */}
      {/*  <> */}
      {/*    <span className={`${styleLoginText}`}>{isUserLogged ? `${firstName}  ${lastName}` : 'Log In'}</span> */}
      {/*    <PersonOutlineOutlinedIcon style={style} /> */}
      {/*  </> */}
      {/*  )} */}
      {/* /> */}
    </div>
  );
}
export default LoginIcon;
