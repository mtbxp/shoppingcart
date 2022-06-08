const fetchItem = async (id) => {
  if (id === undefined) {
    return Error('You must provide an url');
  }

  const url = `https://api.mercadolibre.com/items/${id}`;
  const response = await fetch(url);
  return response.json();
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
