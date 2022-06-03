const fetchItem = async (item) => {
  const url = `https://api.mercadolibre.com/items/${item}`;
  try {
    const data = await fetch(url);
    return await data.json();
  } catch (error) {
    return new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
