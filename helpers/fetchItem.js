const fetchItem = async (param) => {
  if (!param) throw new Error('You must provide an url');
  const endpoint = `https://api.mercadolibre.com/items/${param}`;
  const response = await fetch(endpoint);
  const json = await response.json();
  return json;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
