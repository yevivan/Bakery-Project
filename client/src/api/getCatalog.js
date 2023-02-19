export const getCatalog = async (object) => {
  console.log(object);
  if ('query' in object) {
    const searchedItems = await fetch('/products/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(object),
    })
      .then((response) => response.json())

      .catch((error) => {
        console.error('Error:', error);
      });
    console.log(searchedItems);
    const productsQuantity = searchedItems.length;
    const newArrProduct = searchedItems.map(({
      categories, name, currentPrice, imageUrls: [image], _id, isPopular, itemNo,
    }) => ({
      categories,
      name,
      currentPrice,
      image,
      _id,
      isPopular,
      itemNo,
    }));
    const dataCatalog = {
      products: newArrProduct,
      productsQuantity,
    };
    console.log(dataCatalog);
    return dataCatalog;
    // return searchedItems.map(({
    //   categories, name, currentPrice, imageUrls: [image], _id, isPopular, itemNo,
    // }) => ({
    //   categories,
    //   name,
    //   currentPrice,
    //   image,
    //   _id,
    //   isPopular,
    //   itemNo,
    // }));
  }
  const filterToArr = Object.entries(object);
  const newArr = [];
  filterToArr.forEach((el) => {
    const [key, arr] = el;
    if (arr.length) {
      const newString = `${key.toString()}=${arr.toString()}&`;
      newArr.push(newString);
    }
  });

  if (!newArr.length) {
    const arrayCatalog = await fetch('/products')
      .then((res) => res.json());
    console.log(arrayCatalog);
    return arrayCatalog.map(({
      categories, name, currentPrice, imageUrls: [image], _id, isPopular, itemNo,
    }) => ({
      categories,
      name,
      currentPrice,
      image,
      _id,
      isPopular,
      itemNo,
    }));
  }
  const newStringArr = newArr.join('').slice(0, -1);
  const array = await fetch(`/products/filter?${newStringArr}`)
    .then((res) => res.json());

  const { products: [...arrayCatalog], productsQuantity } = array;
  console.log(arrayCatalog);
  const newArrProduct = arrayCatalog.map(({
    categories, name, currentPrice, imageUrls: [image], _id, isPopular, itemNo,
  }) => ({
    categories, name, currentPrice, image, _id, isPopular, itemNo,
  }));
  const dataCatalog = {
    products: newArrProduct,
    productsQuantity,
  };
  console.log(dataCatalog);
  return dataCatalog;
  // return arrayCatalog.map(({
  //   categories, name, currentPrice, imageUrls: [image], _id, isPopular, itemNo,
  // }) => ({
  //   categories,
  //   name,
  //   currentPrice,
  //   image,
  //   _id,
  //   isPopular,
  //   itemNo,
  // }));
};
