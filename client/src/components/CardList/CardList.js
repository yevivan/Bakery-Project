import { useSelector } from 'react-redux';
import CardListItem from '../CardListItem/CardListItem';
import styles from './CardList.module.scss';

function CardList() {
  const cards = useSelector((state) => state.data.data);
  console.log(cards);
  return (
    <div className={styles.card_list}>
      {cards.map(({
        category,
        name,
        price,
        picture,
        id,
      }) => (
        <CardListItem
          key={id}
          picture={picture}
          category={category}
          name={name}
          price={price}
        />
      ))}

    </div>
  );
}
export default CardList;
