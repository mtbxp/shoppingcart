const fetchProducts = async ($QUERY) => {
  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${$QUERY}`);
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
