import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import styles from './ProductsCounter.module.scss';
import { setCounterProducts, incrementCounterProducts, decrementCounterProducts } from '../../store/slices/counterProductsSlices';

function ProductsCounter(props) {
  const dispatch = useDispatch();
  const counter = useSelector((store) => store.counterProducts.counterProducts);

  const { maxAmount } = props;

  const displayCounter = counter <= 0;
  const maxCounter = counter >= maxAmount;

  function handleIncrement() {
    if (maxCounter) {
      dispatch(setCounterProducts(counter));
    } else {
      dispatch(incrementCounterProducts(counter));
    }
  }
  function handleDecrement() {
    if (displayCounter) {
      dispatch(setCounterProducts(counter));
    } else {
      dispatch(decrementCounterProducts(counter));
    }
  }
  return (
    <ButtonGroup className={styles.counter__container} size="small" aria-label="small outlined button group">
      <Button
        className={styles.counter__btn}
        disabled={maxCounter}
        onClick={() => { handleIncrement(); }}
      >
        +
      </Button>
      <Button className={styles.counter__btn} disabled>
        {counter}
      </Button>
      <Button
        className={styles.counter__btn}
        disabled={displayCounter}
        onClick={() => {
          handleDecrement();
        }}
      >
        -
      </Button>
    </ButtonGroup>
  );
}

export default ProductsCounter;
