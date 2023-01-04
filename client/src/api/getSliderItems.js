export const getSliderItems = async () => {
  const sliderItemsFiltered = await fetch('products/filter?isPopular=true')
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
