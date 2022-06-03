const fetchItem = async (flag) => {
  const getUrl = `https://api.mercadolibre.com/items/${flag}`;
    const getResponse = await fetch(getUrl).then((response) => response.json())
    .then((date) => date.results)
    .catch((error) => error);
    return getResponse;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
