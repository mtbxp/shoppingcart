const urlfetchItem = (urlIdItem) => `https://api.mercadolibre.com/items/${urlIdItem}`;

const fetchItem = async (urlIdItem)  => {
  try {
    const url = urlfetchItem(urlIdItem)
    const response = await fetch(url);
    const data = response.json();
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
