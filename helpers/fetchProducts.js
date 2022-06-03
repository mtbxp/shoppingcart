// const fetch = require('node-fetch');

const fetchProducts = async (product) => {
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
