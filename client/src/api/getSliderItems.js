export const getSliderItems = async () => {
  const sliderItemsFiltered = await fetch('http://127.0.0.1:5005/products/filter?isPopular=true')
    .then((res) => res.json());
  const { products: [...sliderItemsArray] } = sliderItemsFiltered;
  return sliderItemsArray.map(({
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
