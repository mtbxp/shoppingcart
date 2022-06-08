const getUrl = (product) => `https://api.mercadolibre.com/items/${product}`;

const fetchItem = async (id) => {
  try {
    if (id === undefined) {
      throw new Error('You must provide an url');
    }
    const url = getUrl(id);
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
