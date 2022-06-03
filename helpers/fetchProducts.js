const fetchSimulator = require('../mocks/fetchSimulator');

const fetchProducts = async () => {
  const api = await fetchSimulator('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  const response = await api.json();
  console.log(response);
};

fetchProducts();
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
