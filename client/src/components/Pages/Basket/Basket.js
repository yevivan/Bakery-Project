import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import BasketList from '../../BasketList/BasketList';
import OrderForm from '../../OrderForm/OrderForm';
import styles from './Basket.module.scss';
import { closeMenuMobile } from '../../../store/slices/menuMobileSlices';
import Order from '../../Order/Order';

const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  color: '#391113',
  fontSize: 20,
}));

function Basket() {
  // const cartArray = useSelector((state) => state.cartItems.cartItems);
  const dispatch = useDispatch();
  const [form, setForm] = useState(false);
  function showForm() {
    setForm((prev) => !prev);
  }
  function makeOrder() {

  }
  dispatch(closeMenuMobile(false));
  return (
    <Container maxWidth="xl" sx={{ mb: 7 }}>
      <h1 className={styles.title}>My Basket</h1>
      <Grid container spacing={2} justify="center">
        <Grid item xs={12} md={8}>
          <Grid
            container
            spacing={2}
            justify="center"
            align="center"
            sx={{
              p: 0,
            }}
          >
            <Grid item xs={12} lg={12}>
              <Item
                sx={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '3px solid #d8cbc0',
                  display: { sm: 'flex', xs: 'none' },
                }}
              >
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
              <Item sx={{ p: 0 }}>
                <BasketList />
              </Item>
            </Grid>
          </Grid>
          <div className={styles.subContainer}>
            <p className={styles.subText}>Subtotal:</p>
            <div>{}</div>
          </div>
          <button type="button" onClick={() => dispatch(showForm)} className={styles.btnOrder}>Make Order</button>
        </Grid>
        <Grid item xs={12} md={4}>
          {/* <div className={styles.subContainer}> */}
          {/*  <p className={styles.subText}>Subtotal:</p> */}
          {/*  <div>{}</div> */}
          {/* </div> */}
          {/* <Item> */}

          {form && <Order />}
          {/* </Item> */}
        </Grid>
      </Grid>
    </Container>
  );
}
export default Basket;
