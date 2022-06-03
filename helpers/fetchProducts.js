const fetchProducts = async (argument) => {
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${argument}`;
    const require = fetch(endpoint)
    .then((response) => response.json())
    .then((data) => data)
    .catch(() => (new Error('You must provide an url')));
    return require;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
