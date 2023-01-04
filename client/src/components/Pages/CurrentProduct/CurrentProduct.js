import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { Grid, Typography, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import styles from './CurrentProduct.module.scss';
// import ProductsCounter from '../../ProductsCounter/ProductsCounter';
import { updateCartOnserver, setUpdatedCartItemsFromLocal } from '../../../store/slices/cartItems';
import { addCartItemToLocalStorage } from '../../../commonHelpers/addCartItemToLocalStorage';
import { mergeLocalCartArrAndArrInDb } from '../../../commonHelpers/mergeLocalCartArrAndArrInDb';

// ADDED ITEMS ARRAY FOR SENDING TO SERVER.
// IDEA IS TO CHEK IF USER LOGGED AND THEN SEND ARRAY TO SERVER

function CurrentProduct() {
  const { id } = useParams();
  const isUserLoggedIn = useSelector((state) => state.userLogin.isUserLogged);
  const cartItems = useSelector(
    (state) => state.cartItems.cartItems,
  );

  // const [isProductInCart, setIsProductInCart] = useState(false);
  const dispatch = useDispatch();
  const [wrap, setWrap] = useState(null);
  const [currProduct, setCurrProduct] = useState();
  const [currProductId, setCurrProductId] = useState(0);
  // const [prodQuantity, setProdQuantity] = useState();
  // const [cartQuantity, setCartQuantity] = useState(0);
  const activeParameters = {
    borderBottom: '2px solid #fa9bc9',
  };

  // HERE IS CREATED an ARRAY of one product FOR SENDING TO SERVER
  const cartItemData = [{ product: currProduct, cartQuantity: 1, itemNo: id }];

  // function changeCartItemQuantity(counter) {
  //   setCartQuantity(counter);
  // }
  console.log(cartItems);
  console.log(currProductId);
  const index = cartItems.findIndex((el) => el.product._id === currProductId);
  let isItemInCart = false;

  if (index !== -1) {
    isItemInCart = true;
  }
  console.log(isItemInCart);

  async function handleSubmit() {
    if (isUserLoggedIn) {
      const mergedArray = await mergeLocalCartArrAndArrInDb(cartItemData);
      dispatch(updateCartOnserver(mergedArray));
    } else {
      addCartItemToLocalStorage(cartItemData);
      dispatch(setUpdatedCartItemsFromLocal());
    }
  }

  // const displayCounter = counter <= 0;
  // const maxCounter = counter >= prodQuantity;
  // function handleIncrement() {
  //   if (maxCounter) {
  //     setCounter(counter);
  //   } else {
  //     setCounter(counter + 1);
  //   }
  // }
  // function handleDecrement() {
  //   if (displayCounter) {
  //     setCounter(counter);
  //   } else {
  //     setCounter(counter - 1);
  //   }
  // }

  useEffect(() => {
    fetch(`http://127.0.0.1:5005/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrProduct(data);
        setCurrProductId(data._id);
        // setProdQuantity(data.quantity);
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
        flexWrap: 'nowrap',
      }}
      margin={{
        xs: '15px 0',
        sm: '25px 0',
        md: '50px 0',
        lg: '75px 0',
        xl: '75px 0',
      }}
      padding={{
        xs: '0 30px',
        sm: '0 30px',
        md: '0 30px',
        lg: '0 20px',
        xl: '0 20px',
      }}
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
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: '10px',
                flexWrap: 'nowrap',
                maxWidth: '250px',
                alignItems: { xs: 'flex-start', md: 'center' },
                justifyContent: { xs: 'flex-start', md: 'space-between' },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '10px',
                  flexWrap: 'nowrap',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <CardGiftcardIcon
                  onClick={() => {
                    setWrap('gift');
                  }}
                />
                {wrap === 'gift' ? (
                  <Grid item xs>
                    <Typography
                      color="#391113"
                      fs={{
                        xs: '14px',
                        sm: '14px',
                        md: '16px',
                        lg: '16px',
                        xl: '18px',
                      }}
                      fontFamily="Asap"
                      fontWeight="lighter"
                      lineHeight="1.2"
                      width="100%"
                      style={activeParameters}
                    >
                      Gift wrap

                    </Typography>
                  </Grid>
                ) : (
                  <Grid item xs>
                    <Typography
                      color="#391113"
                      fs={{
                        xs: '14px',
                        sm: '14px',
                        md: '16px',
                        lg: '16px',
                        xl: '18px',
                      }}
                      fontFamily="Asap"
                      fontWeight="lighter"
                      lineHeight="1.2"
                      width="100%"
                    >
                      Gift wrap

                    </Typography>
                  </Grid>
                )}
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '10px',
                  flexWrap: 'nowrap',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}
              >
                <LocalMallOutlinedIcon
                  onClick={() => {
                    setWrap('regular');
                  }}
                />
                {wrap === 'regular' ? (
                  <Grid item xs>
                    <Typography
                      color="#391113"
                      fs={{
                        xs: '14px',
                        sm: '14px',
                        md: '16px',
                        lg: '16px',
                        xl: '18px',
                      }}
                      fontFamily="Asap"
                      fontWeight="lighter"
                      lineHeight="1.2"
                      width="100%"
                      style={activeParameters}
                    >
                      Regular wrap

                    </Typography>
                  </Grid>
                ) : (
                  <Grid item xs>
                    <Typography
                      color="#391113"
                      fs={{
                        xs: '14px',
                        sm: '14px',
                        md: '16px',
                        lg: '16px',
                        xl: '18px',
                      }}
                      fontFamily="Asap"
                      fontWeight="lighter"
                      lineHeight="1.2"
                      width="100%"
                    >
                      Regular wrap

                    </Typography>
                  </Grid>
                )}
              </Box>
            </Grid>
            {/* <ProductsCounter
              prodQuantity={prodQuantity}
              // handleDecrement={handleDecrement}
              // handleIncrement={handleIncrement}
              // counter={counter}
              changeCartItemQuantity={changeCartItemQuantity}
            /> */}
            <Typography
              component="body1"
              align="left"
              color="#494949"
              fs={{
                xs: '14px',
                sm: '14px',
                md: '16px',
                lg: '16px',
                xl: '18px',
              }}
              fontFamily="Asap"
              fontWeight="lighter"
              lineHeight="1.2"
              mt="20px"
              width="100%"
              sx={{
                textIndent: '15px',
              }}
            >
              {`Available right now ${currProduct.quantity}`}
            </Typography>
            <Typography
              component="body1"
              align="left"
              color="#494949"
              fs={{
                xs: '14px',
                sm: '14px',
                md: '16px',
                lg: '16px',
                xl: '18px',
              }}
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
                width: '100%',
                backgroundColor: '#391113',
                color: '#fa9bc9',
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
              // disabled={!cartQuantity || !wrap}
              disabled={isItemInCart || !wrap}
              variant="contained"
              className={styles.btn}
              onClick={handleSubmit}
            >
              <Typography
                lineHeight="1.4"
                fontFamily="Barlow Condensed"
                fontWeight="400"
                textTransform="capitalize"
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

              >
                {!isItemInCart ? 'Add To Basket' : 'Already in your Basket'}
              </Typography>
            </Button>
          </Grid>
        </>
      )}
    </Grid>
  );
}
export default CurrentProduct;
