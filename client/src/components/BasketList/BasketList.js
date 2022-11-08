import { useSelector, shallowEqual } from 'react-redux';
import BasketListItem from '../BasketListItem/BasketListItem';
import styles from './BasketList.module.scss';

function BasketList() {
  const data = useSelector((state) => state.data.data, shallowEqual);
  console.log(data);
  return (
    <div className={styles.BasketList}>
      {data.map((item) => (
        <BasketListItem key={item.name} item={item} fromCart />
      ))}
    </div>
  );
}

export default BasketList;
