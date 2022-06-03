const fetchProducts = async (query) => {
  if (query === undefined) { throw new Error('You must provide an url'); }
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  try {
    const response = await fetch(endpoint);
    const json = await response.json();
    return json.results;
  } catch (err) {
      console.log(err);
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
