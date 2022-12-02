import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { useEffect } from 'react';
import CardListItem from '../CardListItem/CardListItem';
import styles from './CardList.module.scss';

import { fetchCatalog } from '../../store/slices/catalogSlices';

function CardList() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.catalog.catalog);
  const filter = useSelector((state) => state.filter.filter, shallowEqual);

  useEffect(() => {
    dispatch(fetchCatalog(filter));
  }, [filter]);

  return (
    <div className={styles.cardList}>
      {cards.map(({
        name,
        currentPrice,
        image,
        _id,
        itemNo,
      }) => (
        <CardListItem
          key={_id}
          image={image}
          id={itemNo}
          name={name}
          currentPrice={currentPrice}
        />
      ))}
    </div>
  );
}
export default CardList;
