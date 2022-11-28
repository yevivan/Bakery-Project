export const getSearchedItems = async (searchPhrases) => {
  const searchedItems = await fetch('http://127.0.0.1:5005/products/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(searchPhrases),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  console.log(searchedItems);
};
