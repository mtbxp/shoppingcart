const fetchProducts = async (product) => {
  // seu código aqui
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;

  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  } catch (erro) {
    return erro;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
