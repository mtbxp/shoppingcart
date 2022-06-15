async function fetchItem(itemId) {
  try {
    const data = await fetch(`https://api.mercadolibre.com/items/${itemId}`);
    return await data.json();
  } catch (error) {
      return error;
  }
}

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}