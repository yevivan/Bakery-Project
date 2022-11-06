/* eslint-disable */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
// import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
// import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
// import { Grid, Typography, Box } from '@mui/material';
import styles from './CurrentProduct.module.scss';
import ProductsCounter from '../../PoductsCounter/ProductsCounter';
import { addBasketArr } from '../../../store/slices/basketArr';

// function CurrentProduct() {
//   // const { id } = props;
//   const dispatch = useDispatch();

//   const name = 'tasty cake';
//   const price = '250';
//   const picture = 'https://www.bakerstreetbakery.com.ua/image/cache/data/torty/shvarzvald/schwarzwald%201-500x500.jpg';
//   const id = 'cakeeee';

//   const [giftWrap, setGiftWrap] = useState(false);
//   const [regularWrap, setRegularWrap] = useState(false);
//   const counter = useSelector((store) => store.counterProducts.counterProducts);
//   const basket = useSelector((store) => store.basketArr.basketArr);
//   const activeParameters = {
//     color: '#391113',
//     borderBottom: '2px solid #fa9bc9',
//   };

//   return (
//     <Grid
//       className={styles.card__container}
//       container
//       sx={{
//         display: 'flex',
//         flexDirection: { xs: 'column', md: 'row' },
//       }}
//       flexWrap="nowrap"
//       padding="0"
//       m="0"
//       display="flex"
//       direction={{
//         md: 'row',
//         lg: 'column',
//       }}
//       margin="75px auto 75px auto"
//       gap="60px"
//       width="100%"
//     >
//       <Grid
//         className={styles.card__image}
//         item
//         container
//         xs
//         margin="0 auto 0 auto"
//       >
//         <Box
//           width="100%"
//           height="500px"
//           m="0"
//           sx={{
//             backgroundImage: `url(${picture})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         />
//       </Grid>
//       <Grid
//         className={styles.card__info}
//         item
//         container
//         xs
//         margin="0 auto 0 auto"
//         display="flex"
//         flexDirection="column"
//       >
//         <Typography
//           variant="h2"
//           align="left"
//           color="#391113"
//           fs="48px"
//           fontFamily="Asap"
//           fontWeight="600"
//           lineHeight="1.2"
//           textTransform="capitalize"
//           m="0"
//         >
//           {name}
//         </Typography>
//         <Typography
//           variant="h4"
//           align="left"
//           color="#494949"
//           mt="20px"
//           fs="26px"
//           fontFamily="Asap"
//           fontWeight="lighter"
//           lineHeight="1.2"
//         >
//           {price}
//           &#8372;
//         </Typography>
//         <Grid
//           className={styles.parameters}
//           container
//           mt="15px"
//           sx={{
//             maxWidth: '235px',
//             display: 'flexbox',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//           }}
//         >
//           <CardGiftcardIcon
//             onClick={() => {
//               setGiftWrap(true);
//               setRegularWrap(false);
//             }}
//           />
//           {giftWrap ? (
//             <Grid item xs style={activeParameters}>
//               Gift wrap
//             </Grid>
//           ) : (
//             <Grid item xs>
//               Gift wrap
//             </Grid>
//           )}
//           <LocalMallOutlinedIcon
//             onClick={() => {
//               setGiftWrap(false);
//               setRegularWrap(true);
//             }}
//           />
//           {regularWrap ? (
//             <Grid item xs style={activeParameters}>
//               Regular wrap
//             </Grid>
//           ) : (
//             <Grid item xs>
//               Regular wrap
//             </Grid>
//           )}
//         </Grid>
//         <ProductsCounter />
//         <Typography
//           variant="body1"
//           align="left"
//           color="#494949"
//           fs="14px"
//           fontFamily="Asap"
//           fontWeight="lighter"
//           lineHeight="1.2"
//           mt="20px"
//           width="100%"
//           sx={{
//             textIndent: '15px',
//           }}
//         >
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit ex
//           corporis eos molestias veniam animi, numquam illum autem, beatae
//           tenetur, necessitatibus qui. Quae voluptates suscipit laudantium
//           dolorem id quam nemo?
//         </Typography>
//         <Button
//           sx={{
//             mt: '20px',
//             width: '100%',
//             height: '54px',
//             backgroundColor: '#391113',
//             color: '#fa9bc9',
//             fontFamily: 'Barlow Condensed',
//             lineHeight: '1.40',
//             fontWeight: '200',
//             fontSize: '23px',
//             textTransform: 'capitalize',
//             borderRadius: '0',
//             '&:hover': {
//               backgroundColor: '#391113',
//               opacity: '0.6',
//             },
//             '&:disabled': {
//               color: '#391113',
//               backgroundColor: '#fff5d6',
//             },
//           }}
//           disabled={!counter || !(giftWrap || regularWrap)}
//           variant="contained"
//           className={styles.btn}
//           onClick={() => {
//             dispatch(addBasketArr(id));
//             console.log(id);
//             console.log(basket);
//           }}
//         >
//           Add To Basket
//         </Button>
//       </Grid>
//     </Grid>
//   );
// }
// export default CurrentProduct;

export default function CurrentProduct() {
  return null;
}
