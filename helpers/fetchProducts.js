 const fetchProducts = async (query) => {
   try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    const result = await response.json();
    const { results } = result;
    return results;
} catch (error) {
      return new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
