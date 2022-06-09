const fetchProducts = async (computador) => {
  // seu código aqui
  try {
    const ENDPOINT = `https://api.mercadolibre.com/sites/MLB/search?q=${computador}`;
    const response = await fetch(ENDPOINT);
    const data = await response.json();
    return data; 
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
