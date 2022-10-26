import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import styles from './CurrentProduct.module.scss';
import ProductsCounter from '../../PoductsCounter/ProductsCounter';
import { addBasketArr } from '../../../store/slices/basketArr';

function CurrentProduct() {
  // const { id } = props;
  const dispatch = useDispatch();

  const name = 'tasty cake';
  const price = '250';
  const picture = 'https://www.bakerstreetbakery.com.ua/image/cache/data/torty/shvarzvald/schwarzwald%201-500x500.jpg';
  const id = 'cakeeee';

  const [giftWrap, setGiftWrap] = useState(false);
  const [regularWrap, setRegularWrap] = useState(false);
  const counter = useSelector((store) => store.counterProducts.counterProducts);
  const basket = useSelector((store) => store.basketArr.basketArr);
  const activeParameters = {
    color: '#391113',
    borderBottom: '2px solid #fa9bc9',
  };

  return (
    <div className={styles.card__container}>
      <div className={styles.card__image}>
        <img className={styles.image} src={picture} alt="" />
      </div>
      <div className={styles.card__info}>
        <p className={styles.title}>{name}</p>
        <p className={styles.price}>
          {price}
          <span>&#8372;</span>
        </p>
        <div className={styles.parameters}>
          <CardGiftcardIcon
            onClick={() => {
              setGiftWrap(true);
              setRegularWrap(false);
            }}
          />
          {giftWrap ? (
            <p style={activeParameters}>Gift wrap</p>
          ) : (
            <p>Gift wrap</p>
          )}
          <LocalMallOutlinedIcon
            onClick={() => {
              setGiftWrap(false);
              setRegularWrap(true);
            }}
          />
          {regularWrap ? (
            <p style={activeParameters}>Regular wrap</p>
          ) : (
            <p>Regular wrap</p>
          )}
        </div>
        <div className={styles.products__counter}>
          <ProductsCounter />
        </div>
        <div className={styles.about}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit ex
          corporis eos molestias veniam animi, numquam illum autem, beatae
          tenetur, necessitatibus qui. Quae voluptates suscipit laudantium
          dolorem id quam nemo?
        </div>
        <Button
          disabled={!counter || !(giftWrap || regularWrap)}
          variant="contained"
          className={styles.btn}
          onClick={() => {
            dispatch(addBasketArr(id));
            console.log(id);
            console.log(basket);
          }}
        >
          Add To Basket
        </Button>
      </div>
    </div>
  );
}
export default CurrentProduct;
