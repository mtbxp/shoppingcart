const fetchItem = async (idElement) => {
  // seu código aqui
  const itemId = idElement;
  const endpoint = `https://api.mercadolibre.com/items/${itemId}`;
  const fetchItemWithEndpoint = await fetch(endpoint);
  const response = await fetchItemWithEndpoint.json();
  return response;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
