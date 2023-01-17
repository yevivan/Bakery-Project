// const userLoginData = { loginOrEmail: 'feonlinefinal@gmail.com', password: '11111111' };

export const userlogIn = async (userData) => {
  const user = await fetch('/customers/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    .then((res) => res.json())
    .catch((err) => err);
  localStorage.setItem('token', JSON.stringify(user.token));
  console.log(user);
  return user.success;
};
export const updateLoginToken = async () => {
  const login = localStorage.getItem('token');
  return Boolean(login);
};
