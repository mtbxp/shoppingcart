const fetchItem = async (ItemID) => {
  try {
    const endpoint = `https://api.mercadolibre.com/items/${ItemID}`;
    const result = await fetch(endpoint);
    const data = await result.json();
    return data;      
  } catch (error) {
    throw new Error(error);    
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
