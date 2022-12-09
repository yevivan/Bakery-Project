import { useSelector, shallowEqual } from 'react-redux';
import BasketListItem from '../BasketListItem/BasketListItem';
import styles from './BasketList.module.scss';

// В корзине только айди и количество. Нужно состыковать с сервером.
//  Корзина отправляется, сервер отдает вседетали попродукту.

function BasketList() {
  // const sliderItems = useSelector((state) => state.sliderItems.sliderItems, shallowEqual);
  // const filter = useSelector((state) => state.filter.filter, shallowEqual);
  // console.log(filter);
  // console.log(sliderItems);
  const cartItemServer = useSelector(
    (state) => state.cartItemsFromServer.cartItemsFromServer,
    shallowEqual,
  );

  const isUserLoged = useSelector((state) => state.userLogin.isUserLogged);

  // const cartItemSLocal = useSelector(
  //   (state) => state.basketArr.basketArr,
  //   shallowEqual,
  // );

  // const isUserLoged = useSelector(
  //   (state) => state.userLogin.userLogin,
  //   shallowEqual,
  // );

  // const cartArrayToDisplay = isUserLoged ? cartItemServer : cartItemSLocal;

  const { products } = cartItemServer;
  console.log(products);
  // console.log(sliderItems);
  if (isUserLoged) {
    return (
      <div className={styles.basketList}>
        {products.map(({ product, cartQuantity, _id }) => (
          <BasketListItem key={_id} item={product} cartQuantity={cartQuantity} />
        // console.log(product, cartQuantity)
        ))}
      </div>
    );
  }
  return null;
}

export default BasketList;
