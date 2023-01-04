import { NavLink } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import EngineeringIcon from '@mui/icons-material/Engineering';
import { useDispatch } from 'react-redux';
import { setIsOpenModal } from '../../store/slices/modalWSlices';

function MenuLogIn({
  menuLogIn, btnLoginMenu, styleIcon, styleIconAdmin, isAdmin,
}) {
  const dispatch = useDispatch();
  return (
    <div className={`${menuLogIn}`}>
      <NavLink to="/account" className={`${btnLoginMenu}`}>
        <SettingsIcon style={styleIcon} />
      </NavLink>
      <button type="button" className={`${btnLoginMenu}`} onClick={() => dispatch(setIsOpenModal(true))}>
        <LogoutIcon style={styleIcon} />
      </button>
      {isAdmin && <NavLink to="/admin" className={`${btnLoginMenu}`}><EngineeringIcon style={styleIconAdmin} /></NavLink>}
    </div>
  );
}
export default MenuLogIn;
