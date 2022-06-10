const fetchItem = (item) => {
    const url = `https://api.mercadolibre.com/items/${item}`;
    const result = fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error);
    return result;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
