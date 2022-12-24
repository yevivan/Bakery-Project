export const addCartToLocalStorage = (cartItemData) => {
  let basket = JSON.parse(localStorage.getItem('products')) || [];
  const { products: [cartItem] } = cartItemData;
  const index = basket.findIndex((el) => el.product === cartItem.product);
  if (index === -1) { basket = [...basket, cartItem]; } else {
    basket[index].cartQuantity += cartItem.cartQuantity;
  }
  localStorage.setItem('products', JSON.stringify(basket));
};
