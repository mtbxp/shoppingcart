const URL = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';

const fetchProducts = async () => {
 try { 
  const response = await fetch(URL);
  const data = await response.json('results'); 
  return data;
 } catch (error) {
  return 'You must provide an url';
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
