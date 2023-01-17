import { useDispatch } from 'react-redux';
import { closeMenuMobile } from '../../../store/slices/menuMobileSlices';
import AdminContainer from '../../AdminContainer/AdminContainer';

function Admin() {
  const dispatch = useDispatch();
  dispatch(closeMenuMobile(false));
  return (
    <AdminContainer />

  );
}
export default Admin;
