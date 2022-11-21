export const getGrid = async () => {
  const array = await fetch('http://127.0.0.1:5005/products/filter?new=true&perPage=6&startPage=1')
    .then((res) => res.json());
  // console.log(arrayData);
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
