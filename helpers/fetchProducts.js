const fetchProducts = async (QUERY) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`;
  const result = await fetch(url)
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
