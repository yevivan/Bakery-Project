import { useSelector, shallowEqual } from 'react-redux';
// import { useEffect } from 'react';
import BasketListItem from '../BasketListItem/BasketListItem';
import styles from './BasketList.module.scss';
// import { setUpdatedCartItemsFromLocal } from '../../store/slices/cartItems';

// В корзине только айди и количество. Нужно состыковать с сервером.
//  Корзина отправляется, сервер отдает вседетали попродукту.

function BasketList() {
  // const isUserLoggedIn = useSelector((state) => state.userLogin.isUserLogged);
  // const dispatch = useDispatch();
  const cartItems = useSelector(
    (state) => state.cartItems.cartItems,
    shallowEqual,
  );

  // useEffect(() => {
  //   if (!isUserLoggedIn) {
  //     dispatch(setUpdatedCartItemsFromLocal());
  //   }
  // });

  let cartProducts;
  if (cartItems) {
    cartProducts = cartItems.map((cartItem) => (
      <BasketListItem key={cartItem._id} item={cartItem} cartItems={cartItems} />
    ));
  } else { cartProducts = null; }

  return (
    <div className={styles.basketList}>
      {cartProducts}
    </div>
  );
}

export default BasketList;
