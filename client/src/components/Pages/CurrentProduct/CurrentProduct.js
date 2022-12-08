import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { Grid, Typography, Box } from '@mui/material';
import { useParams } from 'react-router-dom';

import styles from './CurrentProduct.module.scss';
import ProductsCounter from '../../ProductsCounter/ProductsCounter';
import { addBasketArr } from '../../../store/slices/basketArr';

function CurrentProduct() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const [giftWrap, setGiftWrap] = useState(false);
  const [regularWrap, setRegularWrap] = useState(false);
  const [currProduct, setCurrProduct] = useState();
  const counter = useSelector((store) => store.counterProducts.counterProducts);
  const basket = useSelector((store) => store.basketArr.basketArr);
  const activeParameters = {
    color: '#391113',
    borderBottom: '2px solid #fa9bc9',
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:5005/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrProduct(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Grid
      className={styles.card__container}
      container
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
      }}
      flexWrap="nowrap"
      padding="0 20px 0 20px"
      display="flex"
      direction={{
        md: 'row',
        lg: 'column',
      }}
      margin="75px 0 75px 0"
      gap="60px"
    >
      {currProduct && (
        <>
          <Grid
            className={styles.card__image}
            item
            container
            xs
            margin="0"
          >
            <Box
              width="100%"
              height="500px"
              sx={{
                backgroundImage: `url(${currProduct.imageUrls})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </Grid>
          <Grid
            className={styles.card__info}
            item
            container
            xs
            margin="0"
            display="flex"
            flexDirection="column"
          >
            <Typography
              component="h2"
              align="left"
              color="#391113"
              fontSize={{
                xs: '35px',
                sm: '35px',
                md: '48px',
              }}
              fontFamily="Asap"
              fontWeight="600"
              lineHeight="1.2"
              textTransform="capitalize"
              margin="0"
            >
              {currProduct.name}
            </Typography>
            {
              currProduct.previousPrice ? (
                <div className={styles.price__box}>
                  <Typography
                    className={styles.old__price}
                    component="h6"
                    align="left"
                    color="#111"
                    mt="15px"
                    fontSize="19px"
                    // fontFamily="Asap"
                    fontWeight="600"
                    lineHeight="1.5"
                  >
                    {currProduct.previousPrice}
                    &#8372;
                  </Typography>
                  <Typography
                    component="h4"
                    align="left"
                    color="#b41f27"
                    mt="5px"
                    fs="26px"
                    fontFamily="Asap"
                    fontWeight="lighter"
                    lineHeight="1.2"
                  >
                    {currProduct.currentPrice}
                    &#8372;
                  </Typography>

                </div>
              ) : (
                <Typography
                  variant="h4"
                  align="left"
                  color="#111"
                  mt="15px"
                  fs="26px"
                  fontFamily="Asap"
                  fontWeight="lighter"
                  lineHeight="1.2"
                >
                  {currProduct.currentPrice}
                  &#8372;
                </Typography>
              )
            }
            <Grid
              className={styles.parameters}
              container
              mt="15px"
              sx={{
                maxWidth: '235px',
                display: 'flexbox',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <CardGiftcardIcon
                onClick={() => {
                  setGiftWrap(true);
                  setRegularWrap(false);
                }}
              />
              {giftWrap ? (
                <Grid item xs>
                  <span style={activeParameters}>Gift wrap</span>
                </Grid>
              ) : (
                <Grid item xs>
                  <span>Gift wrap</span>
                </Grid>
              )}
              <LocalMallOutlinedIcon
                onClick={() => {
                  setGiftWrap(false);
                  setRegularWrap(true);
                }}
              />
              {regularWrap ? (
                <Grid item xs>
                  <span style={activeParameters}>Regular wrap</span>
                </Grid>
              ) : (
                <Grid item xs>
                  <span>Regular wrap</span>
                </Grid>
              )}
            </Grid>
            <ProductsCounter maxAmount={currProduct.quantity} />
            <Typography
              variant="body1"
              align="left"
              color="#494949"
              fs="14px"
              fontFamily="Asap"
              fontWeight="lighter"
              lineHeight="1.2"
              mt="20px"
              width="100%"
              sx={{
                textIndent: '15px',
              }}
            >
              {currProduct.description}
            </Typography>
            <Button
              lineHeight="1.4"
              padding={{
                xs: '2px 5px',
                sm: '2px 5px',
                md: '10px 5px',
                lg: '10px 5px',
                xl: '10px 5px',
              }}
              fontSize={{
                xs: '16px',
                sm: '23px',
                md: '23px',
              }}
              sx={{
                width: '100%',
                backgroundColor: '#391113',
                color: '#fa9bc9',
                fontFamily: 'Barlow Condensed',
                fontWeight: '400',
                textTransform: 'capitalize',
                marginTop: '20px',
                borderRadius: '0',
                letterSpacing: '0px',
                '&:hover': {
                  backgroundColor: '#391113',
                  opacity: '0.6',
                },
                '&:disabled': {
                  color: '#391113',
                  backgroundColor: '#fff5d6',
                },
                transition: 'all .35s cubic-bezier(.29,.63,.44,1)',
              }}
              disabled={!counter || !(giftWrap || regularWrap)}
              variant="contained"
              onClick={() => {
                dispatch(addBasketArr(id));
                console.log(id);
                console.log(basket);
              }}
            >
              Add To Basket
            </Button>
          </Grid>
        </>
      )}
    </Grid>
  );
}
export default CurrentProduct;
