const fetchProducts = async (argumento) => {
  // seu código aqui
  if (argumento) {
    const response = await
      fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${argumento}`);
    return response.json();
  }
  return new Error('You must provide an url');
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
