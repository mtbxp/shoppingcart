// const fetch = require('node-fetch');

const fetchProducts = async (digitado) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${digitado}`;
  const retorno = await fetch(url);
  const resultado = await retorno.json();
  const itens = resultado.results;
  return itens;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
