import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useEffect, useState } from 'react';
import styles from './ProductsCounter.module.scss';

function ProductsCounter(props) {
  const { prodQuantity, changeCartItemQuantity, cartQuantity } = props;
  const [counter, setCounter] = useState(cartQuantity);
  const displayCounter = counter <= 0;
  const maxCounter = counter >= prodQuantity;
  function handleIncrement() {
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
        onClick={() => { handleIncrement(); }}
      >
        +
      </Button>
    </ButtonGroup>
  );
}

export default ProductsCounter;
