const getSavedCartItems = () => {
  const getSaved = (localStorage.getItem('cartItems'));
  console.log(getSaved);
  const olCartItems = document.querySelector('.cart__items');
  // const li = 
  // imserir os elementos individualmente detro de suas respectiva li's para depois inserir na ol
  olCartItems.innerText = getSaved;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
