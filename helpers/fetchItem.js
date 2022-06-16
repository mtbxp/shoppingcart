const fetchItem = async (itemToBeFetched) => {
  const url = `https://api.mercadolibre.com/items/${itemToBeFetched}`;
  try {
    const request = await fetch(url);
    const data = await request.json();
    return data;
  } catch (error) {
    return new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
