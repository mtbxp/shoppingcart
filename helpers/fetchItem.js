const endPointTwo = 'https://api.mercadolibre.com/items/';
// Implemente a função fetchItems para fazer a requisição dos detalhes de apenas um produto
const fetchItem = async (id) => {
    const response = await fetch(`${endPointTwo}${id}`);
    return response.json();
};
// console.log(fetchItem('MLB1615760527'));

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
