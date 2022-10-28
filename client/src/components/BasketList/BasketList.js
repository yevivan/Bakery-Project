import { Container } from '@mui/material';
import { useSelector, shallowEqual } from 'react-redux';
import BasketListItem from '../BasketListItem/BasketListItem';

function BasketList() {
  const data = useSelector((state) => state.data.data, shallowEqual);
  console.log(data);
  return (
    <Container>
      {data.map((item) => (
        <BasketListItem key={item.name} item={item} fromCart />
      ))}
    </Container>
  );
}

export default BasketList;

// <div className={styles.cart}>
//   {trash.map((item) => {
//     return <CardItem key={item.article} item={item} fromCart />;
//   })}
// </div>;
