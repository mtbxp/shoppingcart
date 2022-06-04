const fetchItem = async (item) => {
  try {
    const url = await fetch(`https://api.mercadolibre.com/items/${item}`);
    const results = await url.json();
    return results;
  } catch (err) {
    return err;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
