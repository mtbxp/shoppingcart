const fetchItem = async (id) => {
  const url = `https://api.mercadolibre.com/items/${id}`;
  const itemCrud = await fetch(url);
  const item = await itemCrud.json();
  return item;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
