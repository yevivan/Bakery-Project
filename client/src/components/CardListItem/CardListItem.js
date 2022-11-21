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
  return (

    <div className={`${styles.product_item} ${styles[styleForItemsInSlider]}`}>
      <Link to={`/products/${id}`}>
        <img className={styles.product_item_img} src={image} alt="Cake" />
      </Link>
      <p className={styles.product_item_name}>
        {name}
      </p>
      <p className={styles.product_item_price}>
        From $
        {currentPrice}
      </p>
      <ButtonComponent>Shop Now</ButtonComponent>

    </div>
  );
}
export default CardListItem;
