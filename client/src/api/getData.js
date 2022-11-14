export const getData = async () => {
  const arrayData = await fetch('http://127.0.0.1:5005/products').then((res) => res.json());
  console.log(arrayData);
  return arrayData.map(({
    category, name, currentPrice, imageUrls, _id, isPopular,
  }) => ({
    category,
    name,
    currentPrice,
    imageUrls,
    _id,
    isPopular,
  }));
};
