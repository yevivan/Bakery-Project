import { useSelector } from 'react-redux';
import { useRef } from 'react';
import CardListItem from '../CardListItem/CardListItem';
import styles from './Slider.module.scss';

function Slider() {
  const cards = useSelector((state) => state.data.data);
  const prevBtn = useRef();
  const nextBtn = useRef();
  const scrollerRef = useRef();
  const scroll = scrollerRef.current;

  function scrollToPrevtItem() {
    scroll.scrollLeft -= 100;
    console.log(scroll.scrollLeft);
  }

  function scrollToNextItem() {
    scroll.scrollLeft += 100;
    console.log(scroll.scrollLeft);
  }

  return (
    <div className={styles.slider}>
      <div className={styles.slider_header}>
        <h2>Our Customer`s Favorities</h2>
        <p className={styles.item_name}>Just a few of our American recipe bestsellers</p>
      </div>
      <div className={styles.slider_section_wrapper}>
        <button ref={prevBtn} onClick={scrollToPrevtItem} type="button" className={`${styles.btn_prev} ${styles.btn_disabled}`}>&#8249;</button>
        <div ref={scrollerRef} className={styles.slider_cards_track}>
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
        </div>
        <button ref={nextBtn} onClick={scrollToNextItem} type="button" className={`${styles.btn_next} ${styles.btn_disabled}`}>&#8250;</button>
      </div>
    </div>
  );
}
export default Slider;
