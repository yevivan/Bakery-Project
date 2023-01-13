import { useDispatch, useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import styles from './ModalW.module.scss';
import { setIsOpenModal } from '../../store/slices/modalWSlices';
import Button from '../Button/ButtonComponent';
import { setLoggeUser } from '../../store/slices/getLoggedUserSlices';
import { logIn } from '../../store/slices/userLoginSlices';

function ModalW() {
  const dispatch = useDispatch();
  const isOpenModal = useSelector((store) => store.modalW.isOpenModal);
  // const typeOfModal = useSelector((store) => store.modal.typeOfModal);
  const infoModal = useSelector((store) => store.modalW.infoModal);
  console.log(infoModal);
  // const handleClickOpen = () => {
  //
  // };
  //
  function handleSubmit() {
    dispatch(setLoggeUser({}));
    dispatch(logIn(false));
    dispatch(setIsOpenModal(false));
  }

  if (!isOpenModal) {
    return null;
  }
  return (
    <div className={styles.modal} data-testid="modal-root">
      <div
        className={styles.modalBackground}
        onClick={() => dispatch(setIsOpenModal(false))}
      />

      <div className={styles.modalMainContainer}>
        <button className={styles.btnX} onClick={() => dispatch(setIsOpenModal(false))}><CloseIcon style={{ fontSize: 'large', color: '#f09ec4' }} /></button>
        <div className={styles.modalContentWrapper}>
          <h3 className={styles.text}>Are you sure you want to log out?</h3>

        </div>
        <div className={styles.modalButtonWrapper}>
          <Button type="button" text="No" onClick={() => dispatch(setIsOpenModal(false))} />
          <Button type="button" text="Yes" onClick={handleSubmit} />

        </div>
      </div>
    </div>
  );
}

export default ModalW;
