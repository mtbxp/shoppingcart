const fetchProducts = async (id) => {
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${id}`;
    const promise = await fetch(url);
    const result = await promise.json();
    return result.results;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
