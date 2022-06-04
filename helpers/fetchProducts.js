const getProductUrl = (query) => `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
const fetchProducts = async (search) => {
    if (search) {
      const url = getProductUrl(search);
      const response = await fetch(url);
      const data = await response.json();
      return data;
    }
    throw new Error('You must provide an url');
};
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
