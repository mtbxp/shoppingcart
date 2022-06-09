const fetchItem = async (arg) => {
  const url = `https://api.mercadolibre.com/items/${arg}`;
  const getResponse = await fetch(url)
  .then((response) => response.json())
  .then((date) => date)
  .catch((error) => error);
  return getResponse;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
