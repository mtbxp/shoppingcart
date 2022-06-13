// const { thumbnail } = require("../mocks/item");

const fetchProducts = async (argument) => {
  const endpointUrl = `https://api.mercadolibre.com/sites/MLB/search?q=${argument}`;
  const require = fetch(endpointUrl)
  .then((response) => response.json())
  .then((data) => data)
  .catch(() => (new Error('You must provide an url')));
  return require;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}