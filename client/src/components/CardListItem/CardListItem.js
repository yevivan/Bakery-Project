import { Link } from 'react-router-dom';
import styles from './CardListItem.module.scss';
import ButtonComponent from '../Button/ButtonComponent';

function CardListItem(props) {
  const {
    id,
    name,
    currentPrice,
    image,
    styleForItemsInSlider,
  } = props;
  console.log(styleForItemsInSlider);
  return (

    <div>
      <Link to={`/products/${id}`} className={`${styles.product_item} ${styles[styleForItemsInSlider]}`}>
        <img className={styles.product_item_img} src={image} alt="Cake" />

        <p className={styles.product_item_name}>
          {name}
        </p>
        <p className={styles.product_item_price}>
          From $
          {currentPrice}
        </p>

      </Link>
      <ButtonComponent>Shop Now</ButtonComponent>
    </div>
  );
}
export default CardListItem;
