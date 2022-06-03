const fetchProducts = async () => {
  const api = await fetch('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  const response = await api.json();
  return response;
};

fetchProducts();
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
