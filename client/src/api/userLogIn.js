// const userLoginData = { loginOrEmail: 'feonlinefinal@gmail.com', password: '11111111' };

export const userlogIn = async (userData) => {
  const user = await fetch('http://127.0.0.1:5005/customers/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return user.success;
};
