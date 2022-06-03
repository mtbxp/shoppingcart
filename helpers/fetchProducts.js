const fetch = require('node-fetch');

const fetchProducts = async (selectedProduct) => {
  const productUrl = `https://api.mercadolibre.com/sites/MLB/search?q=${selectedProduct}`;
  const productResponse = await fetch(productUrl);
  const productData = await productResponse.json();
  const allProductsFetched = await productData.results;
  const productImageNameId = allProductsFetched.map((productFetched) => ({
    image: productFetched.thumbnail,
    name: productFetched.title,
    sku: productFetched.id,
  }));
  return productImageNameId;
};

fetchProducts('computador');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
