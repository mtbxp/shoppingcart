// const loadingHide = () => {
//   const loading = document.querySelector('.loading');
//   loading.remove();
// };

// const loadingShow = () => {
//   const div = document.createElement('div');
//   div.className = 'loading';
//   div.innerText = 'carregando...';
//   const header = document.querySelector('.header');
//   header.appendChild(div);
// };

const fetchProducts = async ($QUERY) => {
  // seu código 
  if ($QUERY === undefined) {
    return 'You must provide an url';
  } if (typeof $QUERY === 'string') {
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}