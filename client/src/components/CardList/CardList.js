import { useSelector } from 'react-redux';

import CardListItem from '../CardListItem/CardListItem';
import styles from './CardList.module.scss';

function CardList() {
  // const dispatch = useDispatch();
  const cards = useSelector((state) => state.catalog.catalog);
<<<<<<< HEAD

=======
  const searchedCards = useSelector((state) => state.searchedItems.searchedItems);
  console.log(searchedCards);
  console.log(cards);
  const renderedCards = searchedCards.length ? searchedCards : cards;

  const filter = useSelector((state) => state.filter.filter, shallowEqual);

  useEffect(() => {
    dispatch(fetchCatalog(filter));
  }, [filter]);
>>>>>>> af1ed4d1e75c4a54dda7b81159f22ea005019409
  return (
    <div className={styles.cardList}>
      {cards.map(({
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
