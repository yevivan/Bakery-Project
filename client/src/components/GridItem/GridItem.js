/* eslint-disable */
import styles from './GridItem.module.scss';
import { Link } from 'react-router-dom'


function GridItem({

  name, backgroundImage, id, gridArea,
}) {
  const itemStyle = `${styles.item}`;
  return (

          <div style={{ backgroundImage, gridArea }} className={itemStyle} >
              <Link to={`/products/${id}`}>
          <div className={styles.blockTitle}>
              <h3 className={styles.title}>
                  {name}

              </h3>
          </div>
              </Link>
      </div>


  );
}
export default GridItem;
