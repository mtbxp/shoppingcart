const fetchItem = async (id) => {
  if (id === '') return new Error('You must provide an url');
  const url = `https://api.mercadolibre.com/items/${id}`;
  const promise = await fetch(url);
  const data = await promise.json();
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
