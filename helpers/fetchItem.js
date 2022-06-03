const fetchItem = async (productId) => {
  try {
    const url = `https://api.mercadolibre.com/items/${productId}`;
    const apiResponse = await fetch(url);
    const productData = await apiResponse.json();
    return productData;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
