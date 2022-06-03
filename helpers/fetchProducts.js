const fetchProducts = async (endpoint) => {
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${endpoint}`;
    // const loading = document.createElement('span');
    // loading.innerHTML = 'carregando...';
    // loading.className = 'loading';
    // document.querySelector('.items').appendChild(loading);
    const response = await fetch(url);
    const data = await response.json();
    // document.querySelector('.loading').remove();
    return data;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
