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

// ADDED ITEMS ARRAY FOR SENDING TO SERVER.
// IDEA IS TO CHEK IF USER LOGGED AND THEN SEND ARRAY TO SERVER

function CurrentProduct() {
  const { id } = useParams();
  const isUserLoggedIn = useSelector((state) => state.userLogin.isUserLogged);
  console.log(isUserLoggedIn);
  const dispatch = useDispatch();
  const [giftWrap, setGiftWrap] = useState(false);
  const [regularWrap, setRegularWrap] = useState(false);
  const [currProduct, setCurrProduct] = useState();
  const [prodQuantity, setProdQuantity] = useState();
  const [prodId, setProdId] = useState();
  const [counter, setCounter] = useState(0);
  const activeParameters = {
    color: '#391113',
    borderBottom: '2px solid #fa9bc9',
  };

  const displayCounter = counter <= 0;
  const maxCounter = counter >= prodQuantity;
  function handleIncrement() {
    if (maxCounter) {
      setCounter(counter);
    } else {
      setCounter(counter + 1);
    }
  }
  function handleDecrement() {
    if (displayCounter) {
      setCounter(counter);
    } else {
      setCounter(counter - 1);
    }
  }

  useEffect(() => {
    fetch(`http://127.0.0.1:5005/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrProduct(data);
        setProdQuantity(data.quantity);
        setProdId(data._id);
      })
      .catch((err) => console.error(err));
  }, []);

  // HERE ARRAY FOR SENDING TO SERVER IS CREATED
  const cartItemdataForServer = { product: prodId, cartQuantity: counter };
  console.log(cartItemdataForServer);

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
              variant="h2"
              align="left"
              color="#391113"
              fs="48px"
              fontFamily="Asap"
              fontWeight="600"
              lineHeight="1.2"
              textTransform="capitalize"
              m="0"
            >
              {currProduct.name}
            </Typography>
            {
              currProduct.previousPrice ? (
                <div className={styles.price__box}>
                  <Typography
                    className={styles.old__price}
                    variant="h6"
                    align="left"
                    color="#111"
                    mt="15px"
                    fs="26px"
                    // fontFamily="Asap"
                    fontWeight="lighter"
                    lineHeight="1.2"
                  >
                    {currProduct.previousPrice}
                    &#8372;
                  </Typography>
                  <Typography
                    variant="h4"
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
            <ProductsCounter
              maxAmount={prodQuantity}
              handleDecrement={handleDecrement}
              handleIncrement={handleIncrement}
              counter={counter}
            />
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
              sx={{
                mt: '20px',
                width: '100%',
                height: '54px',
                backgroundColor: '#391113',
                color: '#fa9bc9',
                fontFamily: 'Barlow Condensed',
                lineHeight: '1.40',
                fontWeight: '200',
                fontSize: '23px',
                textTransform: 'capitalize',
                borderRadius: '0',
                '&:hover': {
                  backgroundColor: '#391113',
                  opacity: '0.6',
                },
                '&:disabled': {
                  color: '#391113',
                  backgroundColor: '#fff5d6',
                },
              }}
              disabled={!counter || !(giftWrap || regularWrap)}
              variant="contained"
              className={styles.btn}
              onClick={() => {
                // const product = prodId;
                // New key cart quantity added to cart array
                currProduct.cartQuantity = counter;
                // dispatch(addBasketArr(({ product, cartQuantity })));
                dispatch(addBasketArr(currProduct));
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
