// const fetch = require('node-fetch')

const fetchProducts = async (product) => {
  // seu código aqui
  if (product === undefined) {
    return 'You must provide an url';
  }
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
    const result = await fetch(url);
    const data = await result.json();

    return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
