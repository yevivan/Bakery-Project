export const registerNewUser = async (newUserData) => {
  const newUser = await fetch('/customers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUserData),

  })
    .then(async (res) => {
      if (res.ok) { return res.json(); }
      const responseText = await res.json();
      throw new Error(responseText.message);
    })
    .catch((err) => console.log(err.message));
  return newUser;
};
