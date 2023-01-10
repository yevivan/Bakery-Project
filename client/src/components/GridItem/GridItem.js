/* eslint-disable */
import styles from './GridItem.module.scss';
import { Link } from 'react-router-dom'


function GridItem({

  name, backgroundImage, id, gridArea,
}) {
  const itemStyle = `${styles.item}`;
  return (

      <Link to={`/products/${id}`} style={{ backgroundImage, gridArea }} className={itemStyle} >
          <div className={styles.blockTitle}>
              <h3 className={styles.title}>
                  {name}
              </h3>
          </div>
      </Link>


  );
}
export default GridItem;
