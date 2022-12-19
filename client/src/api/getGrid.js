export const getGrid = async () => {
  const array = await fetch('/products/filter?new=true&perPage=6&startPage=1')
    .then((res) => res.json());
  // console.log(array);
  const { products: [...arrayData] } = array;
  return arrayData.map(({
    name, imageUrls: [image], _id, itemNo,
  }) => ({
    name,
    image,
    _id,
    itemNo,
  }));
};
