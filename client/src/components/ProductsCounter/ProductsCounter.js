import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './ProductsCounter.module.scss';
import { updateCartDataOnserver } from '../../api/updateCartOnServer';

function ProductsCounter(props) {
  const cartItems = useSelector(
    (state) => state.cartItems.cartItems,
  );

  const isUserLoggedIn = useSelector((state) => state.userLogin.isUserLogged);
  // console.log(cartItems);
  const {
    itemNo, prodQuantity, changeCartItemQuantity, cartQuantity,
  } = props;
  const [counter, setCounter] = useState(cartQuantity);
  const displayCounter = counter <= 0;
  const maxCounter = counter >= prodQuantity;

  function updateItemQuantityInCartArray(items) {
    const cartArrCopy = [...items];
    console.log(items);
    const updatedItems = cartArrCopy.map((item) => {
      if (item.product.itemNo === itemNo) {
        return { ...item, cartQuantity: counter };
      }
      return item;
    });

    // if (!isUserLoggedIn) {

    //   localStorage.setItem('products', JSON.stringify(updatedItems));
    // }
    console.log(cartItems);
    console.log(updatedItems);
    // updateCartDataOnserver(updatedItems);
  }
  // function updateItemQuantityInCartArrayInLocal(items) {
  //   const cartArrCopy = [...items];

  //   const cartItem = { _id, cartQuantity, itemNo };
  //   console.log(cartArrCopy);
  //   const updatedItems = cartArrCopy.map((item) => {
  //     const [{ product: { itemNo }, cartQuantity, _id }] = item;
  //     if (item.product.itemNo === itemNo) {
  //       return { ...item, cartQuantity: counter };
  //     }
  //     return item;
  //   });

  //   console.log(updatedItems);
  //   localStorage.setItem('products', JSON.stringify(localCartArr));
  // }

  function handleIncrement() {
    // updateItemQuantityInCartArray(cartItems);
    if (maxCounter) {
      setCounter(counter);
    } else {
      setCounter(counter + 1);
    }
  }
  function handleDecrement() {
    if (displayCounter) {
      setCounter(counter);
    } else {
      setCounter(counter - 1);
    }
  }

  useEffect(() => {
    changeCartItemQuantity(counter);
    updateItemQuantityInCartArray(cartItems);
  });

  return (
    <ButtonGroup className={styles.counter__container} size="small" aria-label="small outlined button group">
      <Button
        className={styles.counter__btn}
        disabled={displayCounter}
        onClick={() => {
          handleDecrement();
        }}
      >
        -
      </Button>
      <Button className={styles.counter__btn} disabled>
        {counter}
      </Button>
      <Button
        className={styles.counter__btn}
        disabled={maxCounter}
        onClick={() => {
          handleIncrement();
        }}
      >
        +
      </Button>
    </ButtonGroup>
  );
}

export default ProductsCounter;
