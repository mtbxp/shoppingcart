// const fetch = require('node-fetch')

const fetchProducts = async (item) => {
  // seu código aqui
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;
    const result = await fetch(url);
    const data = await result.json();
    return data;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
