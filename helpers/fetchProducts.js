const fetchProducts = async (productName) => {
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${productName}`;
    const response = await fetch(url);
    const results = await response.json();
    return results;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
