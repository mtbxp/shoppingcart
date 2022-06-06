const fetchItem = async (id) => {
  const url = `https://api.mercadolibre.com/items/${id}`;
  if (id === undefined) { return Promise.reject(new Error('You must provide an url')); }
    const result = await fetch(url);
    const data = await result.json();
    return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
