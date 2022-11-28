import { useSelector } from 'react-redux';
import CardListItem from '../CardListItem/CardListItem';
import styles from './CardList.module.scss';

function CardList() {
  const cards = useSelector((state) => state.catalog.catalog);
  const searchedCards = useSelector((state) => state.searchedItems.searchedItems);
  console.log(searchedCards);
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
