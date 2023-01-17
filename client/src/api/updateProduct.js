export const updateProduct = async (object) => {
  const {
    _id, itemNo, ...rest
  } = object;

  const newObject = {
    ...rest,
    imageUrls: [],
  };
  newObject.imageUrls.push(object.imageUrls);
  console.log(newObject);
  const postUpd = await fetch(`/products/${_id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: JSON.parse(localStorage.getItem('token')),
    },
    body: JSON.stringify(newObject),
  })
    .then((res) => res.json())
    // .then(async (res) => {
    //   if (res.ok) { return res.json(); }
    //   const responseText = await res.json();
    //   throw new Error(responseText.message);
    // })
    .catch((err) => console.log(err.message));
  console.log(postUpd);
};
