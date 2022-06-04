const url = 'https://api.mercadolibre.com/items/MLB1615760527';

const fetchItem = async (item) => {
    try { 
     const response = await fetch(url);
     const data = await response.json(item); 
     return data;
    } catch (error) {
     console.log('You must provide an url');
    } 
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}