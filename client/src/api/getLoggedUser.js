export const getLoggedUser = async () => {
  const loggedUser = await fetch('/customers/customer', {
    method: 'GET',
    headers: { Authorization: JSON.parse(localStorage.getItem('token')) },
  })
    .then((res) => {
      if (res.status === 401 || res.status === 401) {
        console.log('Unauthoruzed');
        return;
      }
      return res.json();
    })
    .catch((err) => console.log(err));
  console.log(loggedUser);

  if (loggedUser) {
    const {
      firstName, lastName, isAdmin, email, telephone,
    } = loggedUser;
    return {
      firstName, lastName, isAdmin, email, telephone,
    };
  }
};
