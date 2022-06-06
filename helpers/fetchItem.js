const fetchItem = (itemId) => {
    const url = `https://api.mercadolibre.com/items/${itemId}`;
  const require = fetch(url)
  .then((response) => response.json())
  .then((data) => data);
  return require;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
