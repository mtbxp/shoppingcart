// const { consoleLog } = require('mocha/lib/reporters/base');

const fetchProducts = async (products) => {
    const ENDPOINT = `https://api.mercadolibre.com/sites/MLB/search?q=${products}`;
    const apiResponse = await fetch(ENDPOINT);
    const productData = await apiResponse.json();
    console.log(productData.results.length);
    return productData;
  };
  
  if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}