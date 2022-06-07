const fetchProducts = (query) => {
  const urlApi = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
