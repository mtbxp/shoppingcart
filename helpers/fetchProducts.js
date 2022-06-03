const fetchProducts = async (endpoint) => {
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${endpoint}`;
    const response = await fetch(url);
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
