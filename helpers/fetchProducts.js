const fetchProducts = async (QUERY) => {
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`;
  const result = await fetch(endpoint);
  const data = await result.json();
  return data.results;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
