const fetchItem = async (id) => {
  const urlfetchItem = `https://api.mercadolibre.com/items/${id}`;
  const promise = fetch(urlfetchItem)
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
