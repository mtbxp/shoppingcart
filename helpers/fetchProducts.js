const fetchProducts = async () => {
  try {
    const QUERY = 'computador';
    const ENDPOINT = `https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`;
    const response = await fetch(ENDPOINT);
    const { results } = await response.json();
    return results;
  } catch (ERRO) {
    console.log('ERRO');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
