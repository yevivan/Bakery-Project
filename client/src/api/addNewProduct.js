export const addNewProduct = async (object) => {
  const newObject = {
    ...object,
    imageUrls: [],
  };
  newObject.imageUrls.push(object.imageUrls);
  console.log(newObject);
  const postReq = await fetch('/products', {
    method: 'POST',
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
  console.log(postReq);
};
