export const getData = async () => {
  const arrayData = await fetch('./data.json').then((res) => res.json());
  console.log(arrayData);

  return arrayData.map(({
    category, name, price, picture, id,
  }) => ({
    category,
    name,
    price,
    picture,
    id,
  }));
};
