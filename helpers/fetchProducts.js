const fetchProducts = async (products) => {
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${products}`;
    const apiResponse = await fetch(url);
    const productData = await apiResponse.json();
    return productData;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
