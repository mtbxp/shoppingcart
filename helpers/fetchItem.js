const url = (codigo) => `https://api.mercadolibre.com/items/${codigo}`;
const fetchItem = async (item) => {
  if (item === undefined) {
    throw new Error('You must provide an url');
   }
const response = await fetch(url(item));
const itens = await response.json();
if (response) {
return itens;
}
};
if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
