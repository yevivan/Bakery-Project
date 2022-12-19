export const getSearchedItems = async (searchPhrases) => {
  console.log(searchPhrases);
  const searchedItems = await fetch('/products/search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(searchPhrases),
  })
    .then((response) => response.json())
    // .then((data) => {
    //   console.log('Success:', data);
    // })
    .catch((error) => {
      console.error('Error:', error);
    });
  return searchedItems.map(({
    categories, name, currentPrice, imageUrls: [image], _id, isPopular, itemNo,
  }) => ({
    categories,
    name,
    currentPrice,
    image,
    _id,
    isPopular,
    itemNo,
  }));
};
