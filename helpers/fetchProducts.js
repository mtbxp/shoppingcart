const fetch = require('node-fetch');
const { thumbnail } = require('../mocks/item');
const { results } = require('../mocks/search');

const fetchProducts = async (callback) => {
  const URL = "https://api.mercadolibre.com/sites/MLB/search?q=computador";

  const result = await fetch(URL)
    .then((response) => response.json())
    .then((data) => Object.values(data.results)
      .forEach(({ id, title, thumbnail }) => callback({id, title, thumbnail})))
    .catch((error) => `${error}`)
  return result;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
