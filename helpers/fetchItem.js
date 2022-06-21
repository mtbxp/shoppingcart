const fetchItem = async ($ItemID) => {
  try {
    const url = `https://api.mercadolibre.com/items/${$ItemID}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (erro) {
    return new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
