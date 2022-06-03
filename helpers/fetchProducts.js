const fetchProducts = async (argumento) => {
  if (argumento) {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${argumento}`;
    const response = await fetch(url);
    return response.json();
  }
  return new Error('You must provide an url');
};
fetchProducts('');
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
