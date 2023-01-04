import { getCartFromDatabase } from '../api/getCartFromDatabase';

// This function accepts as an argument  one product sent
// by user to the cart and inserts it  into array to send whole array to the db.
// Or accepts as an argument cart array from store whatever user is loged or not.
// In case user isnt logged, function inserts array from the store into particular user`s
// array , then merges it, removes duplicates and creates arra for sending to the db.

export const mergeLocalCartArrAndArrInDb = async (cartItemsInStore) => {
  const cartItemsInDb = await getCartFromDatabase();
  let products;
  if (cartItemsInDb)({ products } = cartItemsInDb);
  else {
    products = cartItemsInStore || [];
    return { products };
  }
  products.forEach((el) => {
    cartItemsInStore.forEach(({ product, cartQuantity }) => {
      if (el.product._id === product._id) {
        el.cartQuantity += cartQuantity;
        if (el.cartQuantity >= el.product.quantity) {
          el.cartQuantity = el.product.quantity;
        }
      } else products.push({ product, cartQuantity });
    });
  });
  products = Array.from(new Set(products.map(({ product }) => product._id)))
    .map((id) => products.find(({ product }) => product._id === id));
  localStorage.setItem('products', null);
  return {
    products,
  };
};
