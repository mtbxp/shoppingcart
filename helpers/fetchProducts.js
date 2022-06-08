const fetchProducts = async (item) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;
  if (item === undefined) { return Promise.reject(new Error('You must provide an url')); }
    const result = await fetch(url);
    const { results } = await result.json();
    return results;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
