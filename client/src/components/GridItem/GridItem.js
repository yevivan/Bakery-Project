/* eslint-disable */
import styles from './GridItem.module.scss';


function GridItem({
  name, background, id, gridArea,
}) {
  const itemStyle = `${styles.item}`;
  return (
    <div style={{ background, gridArea }} className={itemStyle} >
      <div className={styles.blockTitle}>
        <h3 className={styles.title}>
          {name}

        </h3>
      </div>
    </div>
  );
}
export default GridItem;
