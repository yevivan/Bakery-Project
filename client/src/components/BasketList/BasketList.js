import { useSelector, shallowEqual } from 'react-redux';
import BasketListItem from '../BasketListItem/BasketListItem';
import styles from './BasketList.module.scss';

function BasketList() {
  const sliderItems = useSelector((state) => state.sliderItems.sliderItems, shallowEqual);
  const filter = useSelector((state) => state.filter.filter, shallowEqual);
  console.log(filter);
  console.log(sliderItems);
  return (
    <div className={styles.basketList}>
      {sliderItems.map((item) => (
        <BasketListItem key={item.name} item={item} fromCart />
      ))}
    </div>
  );
}

export default BasketList;
