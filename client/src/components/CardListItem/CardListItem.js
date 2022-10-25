import styles from './CardListItem.module.scss';
import ButtonComponent from '../Button/ButtonComponent';

function CardListItem(props) {
  const {
    name,
    price,
    picture,
  } = props;

  return (

    <div className={styles.product_item}>
      <img className={styles.product_item_img} src={picture} alt="Cake" />
      <p className={styles.product_item_name}>
        {name}
      </p>
      <p className={styles.product_item_price}>
        From $
        {price}
      </p>
      <ButtonComponent>Shop Now</ButtonComponent>

    </div>
  );
}
export default CardListItem;
