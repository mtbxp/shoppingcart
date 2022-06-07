const fetchProducts = async (product) => {
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
  try {
    const result = await fetch(endpoint);
    const data = await result.json();
    return data;
  } catch (error) {
    return new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
