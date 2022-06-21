const fetchProducts = (param) => {
  // seu código aqui
  const fetchProducts = async (endpoint) => {
    try {
      const url = `https://api.mercadolibre.com/sites/MLB/search?q=${endpoint}`;
      const response = await fetch(url);
      const data = response.json();
      return data;
    } catch (error) {
      return error;
    }
  }
  return fetchProducts(param);
};
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
