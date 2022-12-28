import { getOneProductfromDb } from '../api/getOneItemFromDb';

export const updateLocalStorageCartsFromserver = () => {
  const cartItemsInLocalStorage = JSON.parse(localStorage.getItem('products')) || [];
  const itemsArray = [];
  cartItemsInLocalStorage.forEach(async (element) => {
    const item = await getOneProductfromDb(element.itemNo);
    // console.log(itemsArray);
    // console.log(item);
    item.cartQuantity = element.cartQuantity;
    itemsArray.push(item);
  });
  console.log(itemsArray);
  return itemsArray;
};
