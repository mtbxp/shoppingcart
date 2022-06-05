const fetchItem = async (endpoint) => {
  // seu código aqui
  try {
    const url = `https://api.mercadolibre.com/items/${endpoint}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
