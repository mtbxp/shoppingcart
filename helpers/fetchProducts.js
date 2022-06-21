 const fetchProducts = async (query = 'computador') => {
   try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    const result = await response.json();
    return result;
} catch (error) {
      return new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
