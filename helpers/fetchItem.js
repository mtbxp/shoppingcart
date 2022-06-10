const fetchItem = async(item) => {

  const urlfetchItem = `https://api.mercadolibre.com/items/${Item}`;
  try {
    const response = await fetch(urlfetchItem);
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
