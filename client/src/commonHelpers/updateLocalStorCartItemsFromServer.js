import { getOneProductfromDb } from '../api/getOneItemFromDb';

export const updateLocalStorageCartItemsFromserver = async () => {
  const cartItemsInLocalStorage = JSON.parse(localStorage.getItem('products')) || [];
  const itemsArray = [];
  for (const element of cartItemsInLocalStorage) {
    const product = await getOneProductfromDb(element.itemNo);
    const { cartQuantity } = element;
    itemsArray.push({ product, cartQuantity });
  }

  return itemsArray;
};
