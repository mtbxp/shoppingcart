const fetchProducts = async (QUERY) => {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`);
  const data = await response.json();
  return data;
};
/* istanbul ignore next */
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
