const fetchItem = async (item) => {
  const url = `https://api.mercadolibre.com/items/${item}`;

  try {
    const result = await fetch(url);
    const data = await result.json();
    console.log(data);
    return data;
  } catch (error) {
    return new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
