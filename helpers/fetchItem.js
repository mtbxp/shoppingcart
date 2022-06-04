const fetchItem = async (param) => {
  if(!param) {
    throw new Error('You must provide an url');
  }
  const url = `https://api.mercadolibre.com/items/${param}`;
  const endpoint = await fetch(url);
  const element = await endpoint.json();
  return element
};
if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
