const fetchItem = async (itemID) => {
  const wantedUrl = `https://api.mercadolibre.com/items/${itemID}`;
  try {
    const wantedData = await fetch(wantedUrl);
    const results = await wantedData.json();
    return results;
  } catch (error) {
  return error; 
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
