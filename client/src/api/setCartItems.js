export const setCartItems = async (cartItemsForServer) => {
  const cartArray = await fetch('http://127.0.0.1:5005/cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: JSON.parse(localStorage.getItem('token')),
    },
    body: JSON.stringify(cartItemsForServer),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return cartArray;
};
