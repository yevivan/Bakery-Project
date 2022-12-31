// This function gets cart arrays from local storage and from DB when user logs in

export const mergeLocalCartArrAndArrInDb = (cartItemsInDb) => {
  const cartItemsInLocal = JSON.parse(localStorage.getItem('products')) || [];
  let cartItemsArr = cartItemsInDb.map(({
    cartQuantity, product: { _id: product, quantity, itemNo },
  }) => ({
    product,
    cartQuantity,
    itemNo,
    quantity,
  }));
  console.log(cartItemsArr);
  console.log(cartItemsInLocal);
  cartItemsArr.forEach((el) => {
    cartItemsInLocal.forEach((element) => {
      if (el.itemNo === element.itemNo) {
        el.cartQuantity += element.cartQuantity;
        console.log(el.cartQuantity);
        el.cartQuantity = el.cartQuantity <= el.quantity ? el.cartQuantity : el.quantity;
      }
    });
  });
  cartItemsArr = [...new Set([...cartItemsArr, ...cartItemsInLocal])];
  console.log(cartItemsArr);
  return {
    products: cartItemsArr,
  };
};
