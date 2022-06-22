const fetchItem = async (id) => {
  if (typeof id === 'undefined') return (new Error('You must provide an url'));
  const url = `https://api.mercadolibre.com/items/${id}`;
  const promise = await fetch(url);
  const result = await promise.json();
  console.log(result);
  return (result);
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
