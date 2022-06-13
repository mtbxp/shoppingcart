const fetchProducts = async (query) => {
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  try {
    const response = await fetch(endpoint);
    const resultFinal = await response.json();
    return resultFinal;
  } catch (error) {
  return error;
}
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
