const fetchItem = async (categoria) => {
  const url = `https://api.mercadolibre.com/items/${categoria}`;
  try {
    const response = await fetch(url);
    const date = await response.json();
    return date;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
