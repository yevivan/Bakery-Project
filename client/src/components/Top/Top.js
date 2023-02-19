import { useSelector } from 'react-redux';
// import { background } from 'stylelint-order/rules/shorthandData';
import { Link } from 'react-router-dom';
import styles from './Top.module.scss';

function Top() {
  const top = useSelector((state) => state.top.top);
  const { name, imageUrls: image, itemNo } = top;

  return (
  // <div className={styles.top} style={{ backgroundImage: `url(${image})` }}>
  //   <Link to={`/products/${itemNo}`}>
  //     <div className={styles.topTitle}>
  //       <h3 className={styles.title}>{name}</h3>
  //     </div>
  //     <div className={styles.topInfo}>
  //       <p className={styles.topText}>SPECIAL OFFER</p>
  //     </div>
  //   </Link>
  //
  // </div>
    <Link to={`/products/${itemNo}`} className={styles.top} style={{ backgroundImage: `url(${image})` }}>
      {/* <Link to={`/products/${itemNo}`}> */}
      <div className={styles.topTitle}>
        <h3 className={styles.title}>{name}</h3>
      </div>
      <div className={styles.topInfo}>
        <p className={styles.topText}>SPECIAL OFFER</p>
      </div>
      {/* </Link> */}

    </Link>
  );
}
export default Top;
