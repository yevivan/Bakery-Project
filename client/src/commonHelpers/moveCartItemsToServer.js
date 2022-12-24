import { useSelector } from 'react-redux';
import { updateCartDataOnserver } from '../api/updateCartOnServer';

const isUserLogged = useSelector((state) => state.userLogin.isUserLogged);
const cartItemsInLocal = useSelector((state) => state.basketArr.basketArr);
const cartItemsOnServer = useSelector((state) => state.cartItemsFromServer.cartItemsFromServer);

export const moveItemsToServerCart = () => {
  let cartItemsArr = [];
  if (isUserLogged && cartItemsOnServer && cartItemsInLocal.length) {
    const { products } = cartItemsOnServer;
    cartItemsArr = [...products];
    cartItemsArr.forEach(el => {
        cartItemsOnServer.forEach (element => {
            if (el._id === element.product) {
                el.
            }
        })
    })
  }
};
