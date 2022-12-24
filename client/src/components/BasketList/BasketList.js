import { useSelector, shallowEqual } from 'react-redux';
import BasketListItem from '../BasketListItem/BasketListItem';
import styles from './BasketList.module.scss';

// В корзине только айди и количество. Нужно состыковать с сервером.
//  Корзина отправляется, сервер отдает вседетали попродукту.

function BasketList() {
  // const cartItemServer = useSelector(
  //   (state) => state.cartItemsFromServer.cartItemsFromServer,
  //   shallowEqual,
  // );

  const cartItemServer = useSelector(
    (state) => state.cartItems.cartItems,
    shallowEqual,
  );

  // const itemsInCartInLocalStorage = useSelector(
  //   (state) => state.basketArr.basketArr,
  // );

  // const isUserLoged = useSelector((state) => state.userLogin.isUserLogged);

  // const { products } = cartItemServer;
  // const cartItemsToDisplay = isUserLoged ? products : itemsInCartInLocalStorage;
  // const cartItemsToDisplay = products;
  let cartProducts;
  if (cartItemServer) {
    cartProducts = cartItemServer.map(({ product, cartQuantity, _id }) => (
      <BasketListItem key={_id} item={product} cartQuantity={cartQuantity} />
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
