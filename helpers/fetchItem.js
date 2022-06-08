const fetchItem = async (id) => {
  const endpoint = `https://api.mercadolibre.com/items/${id}`;
  try {
    const response = await fetch(endpoint);
    const json = await response.json();
    return json;
  } catch (err) {
    return err;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
