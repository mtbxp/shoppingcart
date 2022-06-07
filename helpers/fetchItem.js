const fetchItem = async (id) => {
  const url = `https://api.mercadolibre.com/items/${id}`;
  const response = await fetch(url);
  return response.json();
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
