const fetchProducts = async (searchProducts) => {
 try { 
  const URL = `https://api.mercadolibre.com/sites/MLB/search?q=${searchProducts}`;
  const response = await fetch(URL);
  return await response.json(); 
 } catch (error) {
  return new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
