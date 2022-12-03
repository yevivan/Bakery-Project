import { useSelector, useDispatch } from 'react-redux';
import { closeModal, openModal } from '../../store/slices/basketModalSlice';

const isOpenModal = useSelector((state) => state.isOpenModal);
const dispatch = useDispatch();

export const modalHandleClick = () => {
  { isOpenModal ? dispatch(closeModal()) : dispatch(openModal()) }
}