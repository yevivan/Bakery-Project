export const getOneProductfromDb = async (itemNo) => {
  const item = await fetch(`/products/${itemNo}`)
    .then((res) => res.json())
    .catch((err) => err);
  //   console.log(item);
  return item;
};
