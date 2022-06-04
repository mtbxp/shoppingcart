const fetchItem = (arg) => {
  const url = `https://api.mercadolibre.com/items/${arg}`;
  const responseData = fetch(url)
  .then((response) => response.json())
  .then((data) => data);

  return responseData;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
