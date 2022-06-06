const fetchItem = async (MLB1615760527) => {
  const url = `https://api.mercadolibre.com/items/${MLB1615760527}`;
  
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};
if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
