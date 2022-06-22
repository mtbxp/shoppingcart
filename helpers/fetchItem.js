const fetchItem = async (id) => {
  const url = `https://api.mercadolibre.com/items/${id}`;
  const promise = await fetch(url)
  .then((Response) => Response.json())
  .then((result) => result);
  return promise;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
