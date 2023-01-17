import { Link } from 'react-router-dom';
import styles from './CardListItem.module.scss';
// import ButtonComponent from '../Button/ButtonComponent';

function CardListItem(props) {
  const {
    id,
    name,
    currentPrice,
    image,
    // styleForItemsInSlider,
  } = props;
  return (

    <div className={styles.card}>
      <Link to={`/products/${id}`} className={styles.cardLinkBlock}>
        <div className={styles.cardImage} style={{ backgroundImage: `url(${image})` }}>
          {/* <img className={styles.cardImageItem} src={image} alt="Cake" /> */}
        </div>

        <div className={styles.cardName}>
          <p className={styles.cardNameText}>
            {name}
          </p>

        </div>
      </Link>
      <div className={styles.cardPrice}>
        <p className={styles.cardPriceText}>
          From $
          {currentPrice}
        </p>
      </div>

      <Link to={`/products/${id}`} className={styles.button_link}>
        <button className={styles.btn}>Shop Now</button>
      </Link>

      {/* <Link to={`/products/${id}`} className={`${styles.product_item} ${styles[styleForItemsInSlider]}`}> */}
      {/*  <div> */}
      {/*    <img className={styles.product_item_img} src={image} alt="Cake" /> */}
      {/*  </div> */}
      {/*  <p className={styles.product_item_name}> */}
      {/*    {name} */}
      {/*  </p> */}
      {/*  <p className={styles.product_item_price}> */}
      {/*    From $ */}
      {/*    {currentPrice} */}
      {/*  </p> */}
      {/* </Link> */}

      {/* <Link to={`/products/${id}`} className={styles.button_link}> */}
      {/*  <ButtonComponent text="Shop Now" /> */}
      {/* </Link> */}
    </div>
  );
}
export default CardListItem;
