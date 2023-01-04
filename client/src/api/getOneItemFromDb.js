export const getOneProductfromDb = async (itemNo) => {
  const item = await fetch(`/products/${itemNo}`)
    .then((res) => res.json())
    .catch((err) => err);
  return item;
};
