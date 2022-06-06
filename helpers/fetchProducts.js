const fetchProducts = async (selectedProduct) => {
  try {
    const productUrl = `https://api.mercadolibre.com/sites/MLB/search?q=${selectedProduct}`;
    const productResponse = await fetch(productUrl);
    const productData = await productResponse.json();
    return productData;
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
