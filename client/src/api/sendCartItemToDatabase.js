// export const sendCartItemToDatabase = async (productId) => {
//   console.log(productId);
//   const cartArray = await fetch(`/cart/${productId}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: JSON.parse(localStorage.getItem('token')),
//     },
//   })
//     .then((res) => res.json())
//     .catch((err) => console.log(err));

//   return cartArray;
// };
