export const getCatalog = async (search) => {
  if (!search) {
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

  const array = await fetch(`http://127.0.0.1:5005/products/filter?categories=${search}`)
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
