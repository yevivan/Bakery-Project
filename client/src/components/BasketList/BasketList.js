import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import BasketListItem from '../BasketListItem/BasketListItem';
import styles from './BasketList.module.scss';
import { setUpdatedCartItemsFromLocal } from '../../store/slices/cartItems';

// В корзине только айди и количество. Нужно состыковать с сервером.
//  Корзина отправляется, сервер отдает вседетали попродукту.

function BasketList() {
  const isUserLoggedIn = useSelector((state) => state.userLogin.isUserLogged);
  const dispatch = useDispatch();
  const cartItems = useSelector(
    (state) => state.cartItems.cartItems,
    shallowEqual,
  );
  console.log(cartItems);
  // useEffect(() => {
  //   if (!isUserLoggedIn) {
  //     dispatch(setUpdatedCartItemsFromLocal());
  //   }
  // });

  let cartProducts;
  if (cartItems) {
    cartProducts = cartItems.map((cartItem) => (
      <BasketListItem key={cartItem._id} item={cartItem} />
    ));
  } else { cartProducts = null; }

  return (
    <div className={styles.basketList}>
      {cartProducts}
    </div>
  );

  // if (isUserLoged) {
  //   return (
  //     <div className={styles.basketList}>
  //       {cartItemsToDisplay.map(({ product, cartQuantity, _id }) => (
  //         <BasketListItem key={_id} item={product} cartQuantity={cartQuantity} />
  //       ))}
  //     </div>
  //   );
  // }
  // return null;
}

export default BasketList;
