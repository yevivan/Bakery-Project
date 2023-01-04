import { useDispatch } from 'react-redux';
import { closeMenuMobile } from '../../../store/slices/menuMobileSlices';

function Admin() {
  const dispatch = useDispatch();
  dispatch(closeMenuMobile(false));
  return (
    <p>Admin</p>
  );
}
export default Admin;
