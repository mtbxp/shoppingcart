const fetchItem = (argument) => {
 const url = `https://api.mercadolibre.com/items/${argument}`;
 const itemData = fetch(url).then((response) => response.json()).then((data) => data);

 return itemData;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
