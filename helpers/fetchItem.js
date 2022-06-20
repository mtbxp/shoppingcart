const fetchItem = async (ItemID) => {
  const url = `https://api.mercadolibre.com/items/${ItemID}`;
  
  try {
    const request = await fetch(url);
    const data = await request.json();
  // console.log(data.id);
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