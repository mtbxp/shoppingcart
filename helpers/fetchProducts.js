const fetchProducts = async (searchProducts) => {
 try { 
  const URL = `https://api.mercadolibre.com/sites/MLB/search?q=${searchProducts}`;
  
  const response = await fetch(URL);
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
