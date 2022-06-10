const fetchProducts = async (product) => {
  try {
    const ENDPOINT = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
    const response = await fetch(ENDPOINT);
    const data = response.json();
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
