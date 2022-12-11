import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import styles from './ProductsCounter.module.scss';

function ProductsCounter(props) {
  const {
    handleIncrement, handleDecrement, counter, maxCounter, displayCounter,
  } = props;
 
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
