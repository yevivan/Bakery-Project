import styles from './CardListItem.module.scss';
import ButtonComponent from '../Button/ButtonComponent';

function CardListItem(props) {
  const {
    name,
    currentPrice,
    imageUrls,
    styleForItemsInSlider,
  } = props;
  return (

    <div className={`${styles.product_item} ${styles[styleForItemsInSlider]}`}>
      <img className={styles.product_item_img} src={imageUrls} alt="Cake" />
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
