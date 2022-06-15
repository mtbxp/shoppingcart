const fetchProducts = async (item) => {
  const wantedUrl = `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;
  try {
    const wantedData = await fetch(wantedUrl);
    const wantedDataJson = await wantedData.json();
    return wantedDataJson;
  } catch (error) {
  return error; 
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
console.log(fetchProducts());