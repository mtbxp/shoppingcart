const fetchProducts = async (selectedProduct) => {
  try {
    const productUrl = `https://api.mercadolibre.com/sites/MLB/search?q=${selectedProduct}`;
    const productResponse = await fetch(productUrl);
    const productsData = await productResponse.json();
    return productsData;
  } catch (error) {
    return error;
  }
};

fetchProducts('computador');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
