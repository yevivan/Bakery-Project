import { useSelector } from 'react-redux';
import { useRef, useState } from 'react';
import CardListItem from '../CardListItem/CardListItem';
import styles from './Slider.module.scss';

function Slider() {
  const cards = useSelector((state) => state.data.data);
  const prevBtn = useRef();
  const nextBtn = useRef();
  const scrollerRef = useRef();
  const itemRef = useRef(null);
  const scroll = scrollerRef.current;
  // const itemWidth = itemRef.current;
  // console.log(itemWidth.clientWidth);
  const [isMousePressed, setMouseIsPressed] = useState(false);
  const [mouseDownMessage, setMousedownMessage] = useState('not pressed');

  function mouseDownCoords(e) {
    console.log(e);
    setMousedownMessage('PRESSED');
    setMouseIsPressed(true);
    console.log(isMousePressed);
    // alert(isMousePressed);
    // console.log(e.clientX);
    // console.log(e.currentTarget.offsetLeft);
    // console.log(isMousePressed);
  }

  function mouseUpDepress(e) {
    console.log(e);
    // alert('bobbo');
    setMouseIsPressed(false);
    console.log(isMousePressed);
  }
  function mouseSwipeSlides(e) {
    e.stopPropagation();

    if (isMousePressed) {
      console.log(1213232);

      // scroll.scrollLeft += e.clientX;
    }
  }

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
        <span>{mouseDownMessage}</span>
        <p className={styles.slider_header_slogan}>Just a few of our American recipe bestsellers</p>
      </div>
      <div className={styles.slider_section_wrapper}>
        <button ref={prevBtn} onClick={scrollToPrevtItem} type="button" className={`${styles.btn_prev} ${styles.btn_disabled}`}>&#8249;</button>
        <div ref={scrollerRef} className={styles.slider_cards_track_container}>
          <div className={styles.slider_cards_track} onMouseDown={mouseDownCoords} onMouseMove={mouseSwipeSlides} onMouseUp={mouseUpDepress} aria-hidden="true">
            {cards.filter((card) => card.isPopular === true).map(({
              category,
              name,
              currentPrice,
              imageUrls,
              _id,
            }) => (
              <div ref={itemRef} className={styles.slider_item_wrapper} key={_id}>
                <CardListItem
                  key={_id}
                  imageUrls={imageUrls}
                  category={category}
                  name={name}
                  currentPrice={currentPrice}
                  styleForItemsInSlider="product_item_slider"
                />
              </div>
            ))}
          </div>
        </div>
        <button ref={nextBtn} onClick={scrollToNextItem} type="button" className={`${styles.btn_next} ${styles.btn_disabled}`}>&#8250;</button>
      </div>
    </div>
  );
}
export default Slider;
