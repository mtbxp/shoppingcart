const fetchProducts = async (param) => {
  if (!param) {
    throw new Error('You must provide an url');
  }
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${param}`;
  const endpoint = await fetch(url);
  const content = await endpoint.json();
  const items = content.results;
  return items;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
