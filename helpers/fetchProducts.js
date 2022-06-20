const fetchProducts = async (product) => {
  try {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
  const request = await fetch(url);
  const data = await request.json();
  const item = data.results;
  return item;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
