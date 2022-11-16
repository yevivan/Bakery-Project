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

// export const getData = async () => {
//   const arrayData = await fetch('./data.json').then((res) => res.json());
//   return arrayData.map(({
//     category, name, price, picture, id, IsFavorite,
//   }) => ({
//     category,
//     name,
//     price,
//     picture,
//     id,
//     IsFavorite,
//   }));
// };
