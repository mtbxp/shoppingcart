const getUrl = (query) => `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
const fetchProducts = async (search) => {
    if (search) {
      const url = getUrl(search);
      const response = await fetch(url);
      const data = await response.json();
      return data;
    }
    throw new Error('You must provide an url');
};
// fetchProducts();
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
