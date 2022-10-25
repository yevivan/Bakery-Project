import { useSelector, shallowEqual } from 'react-redux';
import { Container } from '@mui/material';
import BasketList from '../../BasketList/BasketList';
import OrderForm from '../../OrderForm/OrderForm';
import styles from './Basket.module.scss';

function Basket() {
  const data = useSelector((state) => state.data.data, shallowEqual);
  console.log(data);
  return (
    <Container className={styles.basket}>
      <h1 className={styles.title}>Моя корзина</h1>
      <BasketList />
      <OrderForm />
    </Container>
  );
}
export default Basket;
