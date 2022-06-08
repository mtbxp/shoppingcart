const fetchItem = async (searchElement) => {
  try {
    const URL = `https://api.mercadolibre.com/items/${searchElement}`;
    const response = await fetch(URL);
    return response.json();
  } catch (error) {
    throw new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
