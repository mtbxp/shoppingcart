const fetchItem = async (item) => {
  const api = await fetch(`https://api.mercadolibre.com/items/${item}`);
  const response = await api.json();
  return response;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
