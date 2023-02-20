export const updateProduct = async (object) => {
  const {
    _id, itemNo, ...rest
  } = object;

  const newObject = {
    ...rest,
    imageUrls: [],
  };
  newObject.imageUrls.push(object.imageUrls);
  const postUpd = await fetch(`/products/${_id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: JSON.parse(localStorage.getItem('token')),
    },
    body: JSON.stringify(newObject),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err.message));
};
