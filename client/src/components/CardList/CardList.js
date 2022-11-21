import { useSelector } from 'react-redux';
import CardListItem from '../CardListItem/CardListItem';
import styles from './CardList.module.scss';

function CardList() {
  const cards = useSelector((state) => state.catalog.catalog);
  console.log(cards);
  return (
    <div className={styles.cardList}>
      {cards.map(({
        category,
        name,
        currentPrice,
        image,
        _id,
      }) => (
        <CardListItem
          key={_id}
          image={image}
          category={category}
          name={name}
          currentPrice={currentPrice}
        />
      ))}

    </div>
  );
}
export default CardList;
