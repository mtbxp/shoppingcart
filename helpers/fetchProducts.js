const fetchProducts = async (query) => {
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
        return new Error('You must provide an url');
  }
};
console.log(fetchProducts('computador'));
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
