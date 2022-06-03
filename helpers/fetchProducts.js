const fetchProducts = async () => {
  const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
  
  const response = await fetch(url);
  const products = await response.json();
  
  return products;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
