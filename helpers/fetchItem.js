const fetchItem = async (id) => {
  // seu código aqui
  try {
  const url = `https://api.mercadolibre.com/items/${id}`;
  const response = await fetch(url);
  const obj = response.json();
  return obj;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
