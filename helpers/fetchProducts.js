const fetchProducts = async (query) => {
  if (query === undefined) {
    throw new Error('You must provide an url');
  }
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
