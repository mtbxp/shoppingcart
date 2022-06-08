// Project <Pixels art> from <Larissa Menezes> done in 22.06.03 for the Trybe course, ninth week. It has been used as reference the notes from the class an external links indicated along the code line

// const fetch = require('node-fetch');

const fetchProducts = async (productName) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${productName}`;
  try {
    if (!productName) throw new Error('You must provide an url');
    const result = await fetch(url)
      .then((response) => response.json());
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