export const getCartFromDatabase = async () => {
  const cart = await fetch('/cart', {
    method: 'GET',
    headers: { Authorization: JSON.parse(localStorage.getItem('token')) },
  })
    .then((res) => res.json());

  return cart;
};
