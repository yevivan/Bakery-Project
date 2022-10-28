import * as React from 'react';
import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import BasketList from '../../BasketList/BasketList';
import OrderForm from '../../OrderForm/OrderForm';
import styles from './Basket.module.scss';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  color: '#391113',
  fontSize: 23,
  borderColor: '#494949',
}));

function Basket() {
  return (
    <Container maxWidth="xl" sx={{ mb: 7 }}>
      <h1 className={styles.title}>Моя корзина</h1>
      <Grid container spacing={2} justify="center">
        <Grid item xs={12} md={8}>
          <Grid container spacing={2} justify="center">
            <Grid item xs={12} lg={12}>
              <Item>
                <Grid container spacing={0}>
                  <Grid item xs={6}>
                    <Item>Product</Item>
                  </Grid>
                  <Grid item xs={2}>
                    <Item>Price</Item>
                  </Grid>
                  <Grid item xs={2}>
                    <Item>Quantity</Item>
                  </Grid>
                  <Grid item xs={2}>
                    <Item>Total</Item>
                  </Grid>
                </Grid>
              </Item>
              <Item>
                <BasketList />
              </Item>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            <OrderForm />
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
}
export default Basket;

// <Grid item xs={6} md={4}>
//   <Item>xs=6 md=4</Item>
// </Grid>
// <Grid item xs={6} md={8}>
//   <Item>xs=6 md=8</Item>
// </Grid>

// <Container maxWidth="xl">
//   <div className={styles.basket}>

//   </div>
// </Container>
