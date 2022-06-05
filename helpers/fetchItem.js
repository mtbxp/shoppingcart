const fetchItem = async (id) => {
  const api = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const response = await api.json();
  return response;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
