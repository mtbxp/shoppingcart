const fetchProducts = async (produto) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${produto}`;
  if (produto === undefined) {
    return new Error('You must provide an url.');
  }
    const response = await fetch(url);
    const results = await response.json();
    return results;  
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}