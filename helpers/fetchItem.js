const fetchItem = async (ItemID) => {
  const urlApi = `https://api.mercadolibre.com/items/${ItemID}`;
  try {
    const itemApi = await fetch(urlApi);
    const data = await itemApi.json();
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
