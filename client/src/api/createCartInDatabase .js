// export const sendCartItemToDatabase = async (cartItemsForServer) => {
//   const cartArray = await fetch('/cart', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: JSON.parse(localStorage.getItem('token')),
//     },
//     body: JSON.stringify(cartItemsForServer),
//   })
//     .then((res) => res.json())
//     .catch((err) => err);

//   return cartArray;
// };
