const fetchItem = async (itemId) => {
  // seu código aqui
  if (itemId === undefined) {
    throw new Error('You must provide an url');
  }
  const url = `https://api.mercadolibre.com/items/${itemId}`;
  const result = await fetch(url);
  const data = await result.json();
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
