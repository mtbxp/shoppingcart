const fetchItem = async (query) => {
  try {
    const url = `https://api.mercadolibre.com/items/${query}`;
    const resonse = await fetch(url);
    const data = await resonse.json();
    return data;
  } catch (err) {
    return new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
