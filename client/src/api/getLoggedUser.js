export const getLoggedUser = async () => {
  const loggedUser = await fetch('/customers/customer', {
    method: 'GET',
    headers: { Authorization: JSON.parse(localStorage.getItem('token')) },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  const { firstName, lastName, isAdmin } = loggedUser;
  return { firstName, lastName, isAdmin };
};
