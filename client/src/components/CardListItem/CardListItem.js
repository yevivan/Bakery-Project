import styles from './CardListItem.module.scss';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

function CardListItem() {
  return (
    <div className={styles.product_item}>
      <img className={styles.product_item_img} src="https://www.bakerstreetbakery.com.ua/image/cache/data/torty/shvarzvald/schwarzwald%201-500x500.jpg" alt="Cake" />
      <p className={styles.product_item_name}> Schawarzwald Cake</p>
      <p className={styles.product_item_price}> From $30</p>
      <ButtonComponent>Shop Now</ButtonComponent>

    </div>
  );
}
export default CardListItem;
