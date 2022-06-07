const fetchItem = async (param) => {
  const url = `https://api.mercadolibre.com/items/${param}`;

  if (!param) {
    throw new Error('You must provide an url');
  }
  const resultado = await fetch(url);
  const json = await resultado.json();
  return json;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
