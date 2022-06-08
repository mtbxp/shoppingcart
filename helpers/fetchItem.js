const fetchItem = async (param) => {
  try {
    const response = await fetch(`https://api.mercadolibre.com/items/${param}`);
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
