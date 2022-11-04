import styles from './GridItem.module.scss';


function GridItem({
  category, background, id, gridArea,
}) {
  const itemStyle = `${styles.item}`;
  return (
    <div style={{ background, gridArea }} className={itemStyle} key={id}>
      <div className={styles.blockTitle}>
        <h3 className={styles.title}>
          {category}

        </h3>
      </div>
    </div>
  );
}
export default GridItem;
