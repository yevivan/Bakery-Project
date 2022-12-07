export const getCatalog = async (filter) => {
  const filterToArr = Object.entries(filter);
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
