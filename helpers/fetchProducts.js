const fetchProducts = async (QUERY) => {
  const ENDPOINT = `https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`;
  const result = await fetch(ENDPOINT)
  .then((response) => response.json())
  .then((data) => data)
  .catch((error) => error);
  return result;
};

fetchProducts('computador');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
