const fetchItem = async (item) => {
  const url = `https://api.mercadolibre.com/items/${item}`;
  if (item === undefined) { return Promise.reject(new Error('You must provide an url')); }
    const result = await fetch(url);
    const { id, title, price } = await result.json();
    return { id, title, price };
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
