export const getData = async () => {
  const arrayData = await fetch('/products')
    .then((res) => res.json());
  console.log(arrayData);

  return arrayData.map(({
    category, name, currentPrice, imageUrls: [image], _id, isPopular, itemNo,
  }) => ({
    category,
    name,
    currentPrice,
    image,
    _id,
    isPopular,
    itemNo,
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
