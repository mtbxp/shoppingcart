const fetchItem = async (ItemID) => {
  try {
    const endpoint = `https://api.mercadolibre.com/items/${ItemID}`;
    const response = await fetch(endpoint);
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
