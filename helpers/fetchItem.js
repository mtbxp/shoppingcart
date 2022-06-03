const fetchItem = async (id) => {
  const url = `https://api.mercadolibre.com/items/${id}`;
  const promise = fetch(url)
  .then((response) => response.json())
  .then((data) => data)
  .catch(() => (new Error('You must provide an url')));
  return promise;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
