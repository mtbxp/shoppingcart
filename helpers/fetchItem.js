const fetchItem = async (id) => {
  try {
    const url = 'https://api.mercadolibre.com/items/';
    const response = await fetch(`${url}${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
