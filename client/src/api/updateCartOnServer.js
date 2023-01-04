export const updateCartDataOnserver = async (cartItemData) => {
  const cartItems = await fetch('/cart/', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: JSON.parse(localStorage.getItem('token')),
    },
    body: JSON.stringify(cartItemData),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return cartItems;
};
