const fetchItem = async (searchItem) => {
  try {
    const fetchItemUrl = `https://api.mercadolibre.com/items/${searchItem}`;
    const response = await fetch(fetchItemUrl);
    if (!response) {
      throw new Error('You must provide an url');
    }
    return await response.json();
  } catch (error) {
    return error.message;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}