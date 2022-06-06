const fetchItem = async (itemID) => {
  try {
    const url = `https://api.mercadolibre.com/items/${itemID}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
