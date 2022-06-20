const fetchItem = async (arg) => {
  const getUrl = `https://api.mercadolibre.com/items/${arg}`;
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
