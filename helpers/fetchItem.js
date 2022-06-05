const fetchItem = async (searchItem) => {
  try {
    const fetchItemUrl = `https://api.mercadolibre.com/items/${searchItem}`;
    const response = await fetch(fetchItemUrl);
    return await response.json();
  } catch (error) {
    return new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}