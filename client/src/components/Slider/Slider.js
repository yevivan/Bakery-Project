import { useSelector } from 'react-redux';
import { useRef } from 'react';
// import CardListItem from '../CardListItem/CardListItem';
import CardListItem from '../CardListItem/CardListItem';
import styles from './Slider.module.scss';

function Slider() {
  const cards = useSelector((state) => state.sliderItems.sliderItems);
  const prevBtn = useRef();
  const nextBtn = useRef();
  const scrollerRef = useRef();
  const itemRef = useRef();
  const scroll = scrollerRef.current;
  // const itemWidth = itemRef.current;
  // console.log(itemWidth.clientWidth);
  // const [isMousePressed, setMouseIsPressed] = useState(false);
  // const [mouseDownMessage, setMousedownMessage] = useState('not pressed');

  function mouseDownCoords(e) {
    console.log(e);
    // setMousedownMessage('PRESSED');
    // setMouseIsPressed(true);
    // console.log(isMousePressed);
    // alert(isMousePressed);
    // console.log(e.clientX);
    // console.log(e.currentTarget.offsetLeft);
    // console.log(isMousePressed);
  }

  // function mouseUpDepress(e) {
  //   console.log(e);
  //   // alert('bobbo');
  //   setMouseIsPressed(false);
  //   console.log(isMousePressed);
  // }
  // function mouseSwipeSlides(e) {
  //   e.stopPropagation();

  //   if (isMousePressed) {
  //     console.log(1213232);

  //     // scroll.scrollLeft += e.clientX;
  //   }
  // }

  function scrollToPrevtItem() {
    scroll.scrollLeft -= 240;
    console.log(scroll.scrollLeft);
  }

  function scrollToNextItem() {
    scroll.scrollLeft += 240;
    console.log(scroll.scrollLeft);
  }

  return (
    <div className={styles.slider}>
      <div className={styles.slider_header}>
        <h2 className={styles.title}>Our Customer`s Favorities</h2>
        <p className={styles.slider_header_slogan}>Just a few of our American recipe bestsellers</p>
      </div>
      <div className={styles.slider_section_wrapper}>
        <button ref={prevBtn} onClick={scrollToPrevtItem} type="button" className={`${styles.btn_prev} ${styles.btn_disabled}`}>&#8249;</button>
        <div ref={scrollerRef} className={styles.slider_cards_track_container}>
          <div className={styles.slider_cards_track} onMouseDown={mouseDownCoords} aria-hidden="true">
            {cards.filter((card) => card.isPopular === 'true').map(({
              category,
              name,
              currentPrice,
              image,
              _id,
              itemNo,
            }) => (
              <div ref={itemRef} className={styles.slider_item_wrapper} key={_id}>
                <CardListItem
                  key={_id}
                  id={itemNo}
                  image={image}
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
