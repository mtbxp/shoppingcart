const fetchItem = (MLB1615760527) => {
    const url = `https://api.mercadolibre.com/items/${MLB1615760527}`;
  
  const result = fetch(url)
  .then((response) => response.json())
  .then((data) => data)
  .catch((error) => error);
  return result;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
