const fetchItem = async (ItemID) => {
  try {
    const URL = `https://api.mercadolibre.com/items/${ItemID}`;
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
