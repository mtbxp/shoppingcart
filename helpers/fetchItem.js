const fetchItem = (item) => {
  const url = fetch(`https://api.mercadolibre.com/items/${item}`)
  .then((response) => response.json())
  .then((data) => data);
  return url;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
