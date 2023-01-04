// This function accepts as an argument the item chosen by an unlogged user,
// checks fotthe sameproduct in local storage, sums up the cartQuantity for identical items or
// adds into array in case the item isunique

export const addCartItemToLocalStorage = (cartItemData) => {
  let localCartArr = JSON.parse(localStorage.getItem('products')) || [];
  const [{ product: { _id }, cartQuantity, itemNo }] = cartItemData;
  const cartItem = { _id, cartQuantity, itemNo };
  const index = localCartArr.findIndex((el) => el._id === cartItem._id);
  if (index === -1) { localCartArr = [...localCartArr, cartItem]; } else {
    localCartArr[index].cartQuantity += cartItem.cartQuantity;
  }
  localStorage.setItem('products', JSON.stringify(localCartArr));
};
