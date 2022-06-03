const fetchProducts = async (produto) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${produto}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    return new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
