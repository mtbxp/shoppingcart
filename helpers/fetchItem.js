const url = (codigo) => `https://api.mercadolibre.com/items/${codigo}`;
const fetchItem = async (item) => {
const response = await fetch(url(item));
const itens = await response.json();
if (response) {
return itens;
}
if (item === undefined) {
 throw new Error('You must provide an url');
}
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
