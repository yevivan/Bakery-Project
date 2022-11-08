import styles from './Top.module.scss';

function Top() {
  return (
    <div className={styles.top}>
      <div className={styles.topTitle}>
        <h3 className={styles.title}>NAME PRODUCT</h3>
      </div>
      <div className={styles.topInfo}>
        <p className={styles.topText}>SPECIAL OFFER</p>
      </div>
    </div>
  );
}
export default Top;
