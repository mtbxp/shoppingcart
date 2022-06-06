// Project <Pixels art> from <Larissa Menezes> done in 22.06.03 for the Trybe course, ninth week. It has been used as reference the notes from the class an external links indicated along the code line

// const fetch = require('node-fetch');

const getURL = (product) => `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;

const fetchProducts = async (productName) => {
  try {
    if (!productName) throw new Error('You must provide an url');
    const result = await fetch(getURL(productName))
      .then((response) => response.json())
      .then((data) => data);
    return result;
  } catch (error) {
    return error;
  }
};
// console.log(fetchProducts('computador'));
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
