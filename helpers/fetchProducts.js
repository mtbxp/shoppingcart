const fetchProducts = async () => {
  const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
fetchProducts();
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
