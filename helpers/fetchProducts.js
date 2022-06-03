const fetchProducts = async (query) => {
  if (query === '') return new Error('You must provide an url');
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
    const promise = await fetch(url);
    const data = await promise.json();
    return data;
  } catch (err) {
    return new Error('An error occurred. :c');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
