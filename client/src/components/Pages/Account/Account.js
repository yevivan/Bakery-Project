import { useDispatch } from 'react-redux';
import styles from './Account.module.scss';
import { closeMenuMobile } from '../../../store/slices/menuMobileSlices';
import AccountContainer from '../../AccountContainer/AccountContainer';

function Account() {
  const dispatch = useDispatch();
  dispatch(closeMenuMobile(false));
  return (
    <AccountContainer />

  );
}
export default Account;
