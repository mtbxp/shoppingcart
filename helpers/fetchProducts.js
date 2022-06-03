const computadorSearch = require('../mocks/search');
const fetchProducts = (param) => {
  if (!param) {
    throw new Error('You must provide an url');
  }
  const test = fetch("https://api.mercadolibre.com/sites/MLB/search?q=computador");
  return computadorSearch

};

if (typeof module !== "undefined") {
  module.exports = {
    fetchProducts,
  };
}
