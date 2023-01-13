import { useDispatch } from 'react-redux';
import styles from './Account.module.scss';
import { closeMenuMobile } from '../../../store/slices/menuMobileSlices';

function Account() {
  const dispatch = useDispatch();
  dispatch(closeMenuMobile(false));
  return (
    <div className={styles.container}>
      <div className={styles.containerForm}>
        <h3 className={styles.title}>Update your data</h3>
      </div>

      <div className={styles.containerForm}>
        <h3 className={styles.title}>Update your password</h3>
      </div>
    </div>

  );
}
export default Account;
