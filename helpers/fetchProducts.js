const fetchProducts = async (query) => {
  // seu código aqui
  // const query = 'computador';
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  try {
    const response = await fetch(endpoint);
    const final = await response.json();
    return final;
  } catch (error) {
    throw new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
