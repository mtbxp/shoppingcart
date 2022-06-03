const fetchProducts = async () => {
  try {
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    const response = await fetch(endpoint);
    const data = await response.json();
      
    return console.log(data.results);
  } catch (error) {
    throw new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
