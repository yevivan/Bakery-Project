export const getCartFromDatabase = async () => {
  const cart = await fetch('/cart', {
    method: 'GET',
    headers: { Authorization: JSON.parse(localStorage.getItem('token')) },
  })
    .then((res) => res.json());
  return cart;
};

// For postman to put product in cart

// {"products": [
//     {
//       "product": "637499250149e4cc3ba25c5d",
//       "cartQuantity": 21
//     }
//   ]
//   }
