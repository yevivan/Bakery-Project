export const getTop = async () => {
  const array = await fetch('http://127.0.0.1:5005/products/filter?new=true&perPage=1&startPage=2')
    .then((res) => res.json());

  const { products: [...arrayTop] } = array;
  const [top] = arrayTop;
  return top;
  // return arrayTop.map(({
  //   name, imageUrls: [image], _id, itemNo,
  // }) => ({
  //   name,
  //   image,
  //   _id,
  //   itemNo,
  // }));
};
