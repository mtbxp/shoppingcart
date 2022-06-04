const fetchItem = async (MLB1615760527) => {
  // seu código aqui
  const url = `https://api.mercadolibre.com/items/${MLB1615760527}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
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
