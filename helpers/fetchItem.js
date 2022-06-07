const fetchItem = async (MLB1615760527) => {
  try {
    const site = `https://api.mercadolibre.com/items/${MLB1615760527}`;
  
    const response = await fetch(site);
    const information = await response.json();
    return information;
    } catch (error) {
      return error;
    }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
