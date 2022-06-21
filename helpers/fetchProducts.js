const fetchProducts = (param) => {
  // seu código aqui
  const pegaProdutos = async (endpoint) => {
    try {
      const url = `https://api.mercadolibre.com/sites/MLB/search?q=${endpoint}`;
      const response = await fetch(url);
      const data = response.json();
      return data;
    } catch (error) {
      return error;
    }
  };
  return pegaProdutos(param);
};
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
