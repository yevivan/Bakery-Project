import { useSelector } from 'react-redux';
import CardListItem from '../CardListItem/CardListItem';
import styles from './CardList.module.scss';

function CardList() {
  const cards = useSelector((state) => state.data.data);
  return (
    <div className={styles.card_list}>
      {cards.map(({
        category,
        name,
        currentPrice,
        imageUrls,
        _id,
        itemNo,
      }) => (
        <CardListItem
          key={_id}
          id={itemNo}
          imageUrls={imageUrls}
          category={category}
          name={name}
          currentPrice={currentPrice}
        />
      ))}

    </div>
  );
}
export default CardList;
