const fetchProducts = async (query) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  // try {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   return data;
  // } catch (error) {
  //   return error;
  // }
  // console.log(fetchProducts('computador'));
  const superMarket = await fetch(url) // aguardando a promise da url
    .then((response) => response.json()) // em caso de sucesso converte a promise para json
    .then((data) => data)// em caso de sucesso retornar os dados
    .catch((error) => error);
    return superMarket;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}

// window.onload = () => fetchProducts('computador');
