const fetchProducts = async (product) => {
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
  try {
    const response = await fetch(endpoint);
    const json = await response.json();
    return json.results;
  } catch (err) {
    return err;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
