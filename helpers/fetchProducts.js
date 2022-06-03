const fetchProducts = async (query) => {
  // seu código aqui
  if (!query) { return new Error('You must provide an url'); }
  const endPoint = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const response = await fetch(endPoint);
  const objResponse = await response.json();
  return objResponse.results; 
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}

fetchProducts('computador');
