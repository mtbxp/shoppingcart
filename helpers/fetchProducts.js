const URL = (product) => `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;

const fetchProducts = async (product) => {
try {
  const url = URL(product);
  const response = await fetch(url);
  const { results } = await response.json();
  return results;
} catch (error) {
  return error;
}
};

fetchProducts('computador');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
