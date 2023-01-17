export const getTop = async () => {
  const array = await fetch('/products/filter?new=true&perPage=1&startPage=2')
    .then((res) => res.json());
  console.log(array)
  const { products: [...arrayTop] } = array;
  const [top] = arrayTop;
  return top;
};
