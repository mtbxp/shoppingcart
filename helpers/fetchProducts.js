const fetchProducts = async (QUERY) => {
  try {
    const ENDPOINT = `https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`;
    const response = await fetch(ENDPOINT);
    const { results } = await response.json();
    return results;
  } catch (ERRO) {
    throw new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
