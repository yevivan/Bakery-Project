import { useSelector } from 'react-redux';
// import { background } from 'stylelint-order/rules/shorthandData';
import styles from './Top.module.scss';

function Top() {
  const top = useSelector((state) => state.top.top);
  const { name, imageUrls: image } = top;

  return (
    <div className={styles.top} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.topTitle}>
        <h3 className={styles.title}>{name}</h3>
      </div>
      <div className={styles.topInfo}>
        <p className={styles.topText}>SPECIAL OFFER</p>
      </div>
    </div>
  );
}
export default Top;
