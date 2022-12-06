export const getCart = async () {
    const cart = fetch("http://127.0.0.1:5005/cart")
    .then(res=> res.json())
    .then(data=> console.log(data))

    return cart
}

// For postman to put product in cart

// {"products": [
//     {
//       "product": "637499250149e4cc3ba25c5d",
//       "cartQuantity": 21
//     }
//   ]
//   }