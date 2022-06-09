const fetchProducts = async (param) => { 
  const API_URL = `https://api.mercadolibre.com/sites/MLB/search?q=${param}`;
  const result = await fetch(API_URL);
  const data = await result.json();

  console.log(data.results);
  return data.results;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}

// pegar sku, name, image
// forEach e jogar as infos na função que cria o card.
// pegar o elemento section 'items'
// e fazer um appendChild nele