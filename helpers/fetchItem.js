const fetchItem = async (item) => {
  try {
    const data = await fetch(`https://api.mercadolibre.com/items/${item}`);
    const value = await data.json();
    return value;
  } catch (error) {
    return (error);
  }
};
if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
