const fetchItem = async (ItemID) => {
  try {
    const url = `https://api.mercadolibre.com/items/${ItemID}`;
    const response = await fetch(url);
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
