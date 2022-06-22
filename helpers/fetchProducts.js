const fetchProducts = async (produto) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${produto}`;
  if (produto === undefined) {
    return new Error('You must provide an url.');
  }
    const response = await fetch(url);
    const data = await response.json();
    return data;  
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
