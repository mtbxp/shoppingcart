const fetchItem = async (item) => {
  try {
    const endpoint = `https://api.mercadolibre.com/items/${item}`;
    const response = await fetch(endpoint);
    const data = await response.json();
    console.log(data.price);
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
