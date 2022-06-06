const getUrl = (product) => `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;

const fetchProducts = async (product) => {
try {
  const url = getUrl(product);
  const result = await fetch(url);
  const data = await result.json();
  return data.results;
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
