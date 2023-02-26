export const getLoggedUser = async () => {
  const loggedUser = await fetch('/customers/customer', {
    method: 'GET',
    headers: { Authorization: JSON.parse(localStorage.getItem('token')) },
  })
    .then((res) => {
      if (res.status === 401 || res.status === 500) {
        return;
      }
      return res.json();
    })
    .catch((err) => console.log(err));

  if (loggedUser) {
    const {
      firstName, lastName, isAdmin, email, telephone,
    } = loggedUser;
    return {
      firstName, lastName, isAdmin, email, telephone,
    };
  }
};
