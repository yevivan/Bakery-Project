export const getCatalog = async (object) => {
  console.log(object);
  if ('query' in object) {
    console.log(true);
    const searchedItems = await fetch('http://127.0.0.1:5005/products/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(object),
    })
      .then((response) => response.json())
    // .then((data) => {
    //   console.log('Success:', data);
    // })
      .catch((error) => {
        console.error('Error:', error);
      });
    return searchedItems.map(({
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
    const arrayCatalog = await fetch('http://127.0.0.1:5005/products')
      .then((res) => res.json());

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
  const array = await fetch(`http://127.0.0.1:5005/products/filter?${newStringArr}`)
    .then((res) => res.json());
  const { products: [...arrayCatalog] } = array;
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
};
