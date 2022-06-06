const fetchItem = async (item) => {
  try {
    const endpoint = `https://api.mercadolibre.com/items/${item}`;
    const apiReturn = await fetch(endpoint);
    const dataItem = await apiReturn.json();
    return dataItem;
  } catch (error) {
    return error;
  }
  
  // seu código aqui
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
