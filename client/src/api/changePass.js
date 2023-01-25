export const changePass = async (object) => {
  const newPass = await fetch('/customers/password', {
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

  console.log(newPass);
  return newPass;
};
