const fetchItem = async (param) => {
  // seu código aqui
  const url = `https://api.mercadolibre.com/items/${param}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
