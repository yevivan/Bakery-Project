import { getOneProductfromDb } from '../api/getOneItemFromDb';

export const updateLocalStorageCartItemsFromserver = async () => {
  const cartItemsInLocalStorage = JSON.parse(localStorage.getItem('products')) || [];
  const itemsArray = [];
  for (const element of cartItemsInLocalStorage) {
    const product = await getOneProductfromDb(element.itemNo);
    const prodQuantityInDb = product.quantity;
    let { cartQuantity } = element;
    if (cartQuantity > prodQuantityInDb) cartQuantity = prodQuantityInDb;
    itemsArray.push({ product, cartQuantity });
  }

  return itemsArray;
};
