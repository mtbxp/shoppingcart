const fetchProducts = async (argument) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${argument}`;
  const promise = await fetch(url)
  .then((Response) => Response.json())
  .then((result) => result)
  .catch(() => (new Error('You must provide an url')));
  return promise;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
