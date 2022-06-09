const fetchItem = async (item) => {
  // seu código aqui
  try {
    const ENDPOINT = `https://api.mercadolibre.com/items/${item}`;
    const response = await fetch(ENDPOINT);
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
