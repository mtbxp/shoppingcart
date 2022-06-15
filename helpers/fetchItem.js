const fetchItem = async (item) => {
  const endpoint = `https://api.mercadolibre.com/items/${item}`;

  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
};
  fetchItem('MLB1341706310');
if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
