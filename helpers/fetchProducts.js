const fetchProducts = async (query) => {
  // seu código aqui
  const endPoint = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const response = await fetch(endPoint);
  const objResponse = await response.json();
  console.log(objResponse.results);
  return objResponse.results; 
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}

fetchProducts('computador');
