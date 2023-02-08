import { shallowEqual, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Container, Pagination, Stack } from '@mui/material';
import CardListItem from '../CardListItem/CardListItem';
import styles from './CardListForSearch.module.css';

function CardListForSearch() {
  const data = useSelector((state) => state.catalog, shallowEqual);
  console.log(data);
  // const pageQty = 1;
  // const pageQty = useSelector((state) => state.catalog.pageQuantity);
  // console.log(pageQty);
  const [showPage, setShowPage] = useState(1);
  const [array, setArray] = useState([]);
  //
  function updCards() {
    setArray(() => {
      if (data.pageQuantity > 1) {
        const n = (showPage - 1) * 8;
        console.log(n);
        const arrayForChoose = [];
        if (showPage === data.pageQuantity) {
          return data.catalog.slice(n);
        }
        for (let i = n; i <= n + 7; i += 1) {
          console.log(i);
          console.log(data.catalog[i]);
          arrayForChoose.push(data.catalog[i]);
        }
        console.log(arrayForChoose);
        return arrayForChoose;
      } return data.catalog;
    });
  }
  //
  useEffect(() => {
    updCards();

    console.log(array);
  }, [data, showPage]);

  return (
    <div className={styles.container}>
      <div className={styles.cardList}>

        {!array.length ? <p>Loading...</p>
          : array.map(({
          // category,
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
              // category={category}
              name={name}
              currentPrice={currentPrice}
            />
          ))}

      </div>
      <Container
        maxWidth="md"
        sx={{
          marginBlock: '15px',
        }}
      >
        <Stack>
          {!!(data.pageQuantity - 1) && (
          <Pagination
            variant="outlined"
            color="primary"
            count={data.pageQuantity}
            page={showPage}
            onChange={(e, num) => setShowPage(num)}
          />
          )}

        </Stack>

      </Container>
    </div>
  );
  // const pageQty = useSelector((state) => state.catalog.pageQuantity);
  // const [page, setPage] = useState(1);
  // const [array, setArray] = useState([]);
  //
  // useEffect(() => {
  //   const i = page * 8 - 1;
  //   const newArr = cards.splice(0, i);
  //   console.log(newArr);
  //   setArray(newArr);
  // }, [page]);
  // // function selectArraySearch(page) {
  // //   const i = page * 8 - 1;
  // //   const newArr = cards.splice(0, i);
  // //   setArray(newArr);
  // // }

  // const cardItems = cards.map(({
  //   // category,
  //   name,
  //   currentPrice,
  //   image,
  //   _id,
  //   itemNo,
  // }) => (
  //   <CardListItem
  //     key={_id}
  //     image={image}
  //     id={itemNo}
  //           // category={category}
  //     name={name}
  //     currentPrice={currentPrice}
  //   />
  // ));
  // return (
  //   <div className={styles.container}>
  //     <div style={styles.cardList}>
  //       {cardItems}
  //     </div>
  // { /* <Container */ }
  // { /*  maxWidth="md" */ }
  // { /*  sx={{ */ }
  // { /*    marginBlock: '15px', */ }
  // { /*  }} */ }
  // { /* > */ }
  // { /*  <Stack> */ }
  // { /*    {!!(page - 1) && ( */ }
  //
  // { /*    <Pagination */ }
  // { /*      variant="outlined" */ }
  // { /*      color="primary" */ }
  // { /*      count={pageQty} */ }
  // { /*      page={page} */ }
  // { /*      onChange={(e, num) => setPage(num)} */ }
  // { /*    /> */ }
  //
  // { /*    )} */ }
  // { /*  </Stack> */ }
  //
  // { /* </Container> */ }
  // </div>
  // );
}
export default CardListForSearch;
