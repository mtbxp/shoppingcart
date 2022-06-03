// Project <Pixels art> from <Larissa Menezes> done in 22.06.03 for the Trybe course, ninth week. It has been used as reference the notes from the class an external links indicated along the code line

const fetch = require('node-fetch');

const getURL = (product) => `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;

const fetchProducts = async (productName) => {
  const response = await fetch(getURL(productName));
  const data = await response.json();
  const list = data.results;
  return list;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
