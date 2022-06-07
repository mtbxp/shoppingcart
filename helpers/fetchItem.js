const fetchItem = async (productId) => {
  try {
    const productIdUrl = `https://api.mercadolibre.com/items/${productId}`;
    const productIdResponse = await fetch(productIdUrl);
    const productIdData = await productIdResponse.json();
    return productIdData;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
