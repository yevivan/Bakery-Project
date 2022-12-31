import { rest } from 'lodash';
import { getCartFromDatabase } from '../api/getCartFromDatabase';

// This function gets cart arrays from local storage and from DB when user logs in

export const mergeLocalCartArrAndArrInDb = async (cartItemsInStore) => {
  // const cartItemsInLocal = JSON.parse(localStorage.getItem('products')) || [];
  const cartItemsInDb = await getCartFromDatabase();
  const { products } = cartItemsInDb;
  console.log(cartItemsInDb);
  let cartItemsArr = products.map(({
    product,
  }) => ({
    ...product,

  }));
  console.log(cartItemsArr);
  console.log(cartItemsInStore);
  cartItemsArr.forEach((el) => {
    cartItemsInStore.forEach((element) => {
      if (el.itemNo === element.itemNo) {
        el.cartQuantity = element.cartQuantity;
        console.log(el.cartQuantity);
        el.cartQuantity = el.cartQuantity <= el.quantity ? el.cartQuantity : el.quantity;
      }
    });
  });
  cartItemsArr = [...new Set([...cartItemsArr, ...cartItemsInStore])];
  console.log(cartItemsArr);
  return {
    products: cartItemsArr,
  };
};
