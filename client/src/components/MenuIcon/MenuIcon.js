import { useSelector } from 'react-redux';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Navigation from '../Navigation/NavigationIconMenu';
import styles from './MenuIcon.module.scss';
import Modal from '../Modal/Modal';
import { closeModal, openModal } from '../../store/slices/basketModalSlice';

function MenuIcon() {
  const isOpenModal = useSelector((state) => state.isOpenModal);

  return (
    <div className={styles.img}>
      <Navigation onClick={isOpenModal ? closeModal : openModal} basket={<ShoppingBasketIcon />} />
      {isOpenModal ? <Modal /> : null}
    </div>
  );
}
export default MenuIcon;
