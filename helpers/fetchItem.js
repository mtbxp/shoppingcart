const fetchItem = async (id) => {
  const endpoint = `https://api.mercadolibre.com/items/${id}`;
  const response = await fetch(endpoint);
  const json = await response.json();
  return json;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
