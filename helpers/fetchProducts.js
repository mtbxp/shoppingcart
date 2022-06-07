const fetchProducts = async (category) => {
  if (!category) throw new Error('You must provide an url');
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${category}`;
  const response = await fetch(endpoint);
  const result = await response.json();
  return result;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
