const fetchItem = (itemId) => {
    const url = `https://api.mercadolibre.com/items/${itemId}`;
  const response = fetch(url)
  .then((response) => response.json())
  .then((data) => data);
  return response;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
