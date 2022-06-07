const fetchItem = async (id) => {
  // seu código aqui
  if (!id || id.length === 0) {
    return new Error('You must provide an url');
   }
    const url = `https://api.mercadolibre.com/items/${id}`;
    const response = await fetch(url)
    .then((received) => received.json())
    .then((result) => result);
    return response;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
