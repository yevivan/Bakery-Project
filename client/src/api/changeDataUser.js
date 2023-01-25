export const changeDataUser = async (object) => {
  const newDataUser = await fetch('/customers', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: JSON.parse(localStorage.getItem('token')),
    },
    body: JSON.stringify(object),
  })
    .then((res) => res.json())
  // .then(async (res) => {
  //   if (res.ok) { return res.json(); }
  //   const responseText = await res.json();
  //   throw new Error(responseText.message);
  // })
    .catch((err) => console.log(err.message));
  const { firstName, lastName, isAdmin } = newDataUser;
  localStorage.setItem('user', JSON.stringify({ firstName, lastName, isAdmin }));
  console.log(newDataUser);
  return { firstName, lastName, isAdmin };
};
