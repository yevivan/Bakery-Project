import { useSelector } from 'react-redux';
import CardListItem from '../CardListItem/CardListItem';
import styles from './Slider.module.scss';

function Slider() {
  const cards = useSelector((state) => state.data.data);
  return (
    <div className={styles.slider}>
      <div className={styles.slider_header}>
        <h2>Our Customer`s Favorities</h2>
        <p>Just a few of our American recipe bestsellers</p>
      </div>
      <div className={styles.slider_section_wrapper}>
        <button type="button" className={`${styles.btn_prev} ${styles.btn_disabled}`}>&#8249;</button>
        {cards.filter((card) => card.IsFavorite === true).map(({
          category,
          name,
          price,
          picture,
          id,
        }) => (
          <CardListItem
            key={id}
            picture={picture}
            category={category}
            name={name}
            price={price}
          />
        ))}
        <button type="button" className={`${styles.btn_next} ${styles.btn_disabled}`}>&#8250;</button>
      </div>
    </div>
  );
}
export default Slider;
