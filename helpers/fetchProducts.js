const fetchProducts = async (product) => {
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
    const apiResponse = await fetch(url);
    const productsData = await apiResponse.json();

    if (productsData.results.length === 0) return new Error('Invalid product');

    return productsData;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
