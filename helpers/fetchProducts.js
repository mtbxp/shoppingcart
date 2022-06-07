const fetchProducts = async (param) => {
  if (param === undefined) {
    return Error('You must provide an url');
  }
  
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${param}`;
  const response = await fetch(url);
  return response.json();
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
