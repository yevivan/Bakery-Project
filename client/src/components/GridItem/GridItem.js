/* eslint-disable */
import styles from './GridItem.module.scss';


function GridItem({

  name, backgroundImage, id, gridArea,
}) {
  const itemStyle = `${styles.item}`;
  return (
    <div style={{ backgroundImage, gridArea }} className={itemStyle} >

      <div className={styles.blockTitle}>
        <h3 className={styles.title}>
          {category}

        </h3>
      </div>
    </div>
  );
}
export default GridItem;
