const fetchProducts = async (query) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`; // abertura de uma variável com a url(API) que vamos trabalhar
  try {
    const itemURL = await fetch(url); // aguardando a promise da url
    const response = await itemURL.json(); // em caso de sucesso converte a promise para json
    return response;
   } catch (error) {
     return error; // em caso de não sucesso retorne o erro
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}

// window.onload = () => fetchProducts('computador');
