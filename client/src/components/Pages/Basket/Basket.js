import BasketList from '../../BasketList/BasketList';
import OrderForm from '../../OrderForm/OrderForm';

function Basket() {
  return (
    <div>
      <p>КОРЗИНА</p>
      <BasketList />
      <OrderForm />
    </div>
  );
}
export default Basket;
