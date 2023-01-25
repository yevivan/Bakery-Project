export const getLoggedUser = async () => {
  const loggedUser = await fetch('/customers/customer', {
    method: 'GET',
    headers: { Authorization: JSON.parse(localStorage.getItem('token')) },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  console.log(loggedUser);
  // localStorage.setItem('user', JSON.stringify(loggedUser));
  const { firstName, lastName, isAdmin } = loggedUser;
  localStorage.setItem('user', JSON.stringify({ firstName, lastName, isAdmin }));
  return { firstName, lastName, isAdmin };
};
export const updateLoggerUser = async () => {
  const user = localStorage.getItem('user');
  console.log(user);
  if (user) {
    console.log(JSON.parse(user));
    return JSON.parse(user);
  }
};
