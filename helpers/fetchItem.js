const fetchItem = async (itemId) => {
  const getUrl = `https://api.mercadolibre.com/items/${itemId}`;
  try {
    const response = await fetch(getUrl);
    const itemProduct = await response.json();
    return itemProduct;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
