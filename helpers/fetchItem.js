const fetchItem = async (param) => {
  try {
    const URL = `https://api.mercadolibre.com/items/${param}`;
    const response = await fetch(URL);
    const data = response.json();
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
