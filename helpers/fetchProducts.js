const url = ($QUERY) => `https://api.mercadolibre.com/sites/MLB/search?q=${$QUERY}`;

const fetchProducts = async ($QUERY) => {
  try {
    const response = await fetch(url($QUERY));
    const info = await response.json();
    return info.results;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
