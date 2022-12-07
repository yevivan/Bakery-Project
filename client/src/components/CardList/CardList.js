import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { useEffect } from 'react';

import CardListItem from '../CardListItem/CardListItem';
import styles from './CardList.module.scss';

import { fetchCatalog } from '../../store/slices/catalogSlices';

function CardList() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.catalog.catalog);
  const searchedCards = useSelector((state) => state.searchedItems.searchedItems);
  console.log(searchedCards);
  console.log(cards);
  const renderedCards = searchedCards.length ? searchedCards : cards;


  const filter = useSelector((state) => state.filter.filter, shallowEqual);

  useEffect(() => {
    dispatch(fetchCatalog(filter));
  }, [filter]);

  return (
    <div className={styles.cardList}>
      {renderedCards.map(({
        category,
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
          category={category}
          name={name}
          currentPrice={currentPrice}
        />
      ))}
    </div>
  );
}
export default CardList;
