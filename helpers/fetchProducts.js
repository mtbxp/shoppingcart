const fetchProducts = async (product) => {
  // seu código aqui
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
  
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data.results;
  } catch (erro) {
    return erro;
  }
};

fetchProducts('computador');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
