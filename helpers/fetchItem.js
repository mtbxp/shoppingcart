const fetchItem = async (itemID) => {
  // seu código aqui]
  if (itemID) {
    const ENDPOINT = `https://api.mercadolibre.com/items/${itemID}`;
    const response = await fetch(ENDPOINT);
    const data = await response.json();
    return data;
  }
  throw new Error('You must provide an url');
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
