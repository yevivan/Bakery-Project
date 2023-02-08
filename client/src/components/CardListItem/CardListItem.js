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
        <button type="button" className={styles.btn}>Shop Now</button>
      </Link>

    </div>
  );
}
export default CardListItem;
