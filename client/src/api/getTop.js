export const getTop = async () => {
  const array = await fetch('/products/filter?new=true&perPage=1&startPage=2')
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
