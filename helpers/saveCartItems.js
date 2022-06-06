/*
referencia
https://medium.com/@lameckanao/armazenando-e-manipulando-dados-no-localstorage-7bcc901ba12b
descobri q a resposta de um localStorage vazio e null
*/
const saveCartItems = (card) => {
  if (document.querySelector('.total-price') === null) {
    localStorage.setItem('cartItems', JSON.stringify([card]));
  } else { 
    const storage = JSON.parse(localStorage.getItem('cartItems'));
    localStorage.setItem('cartItems', JSON.stringify([...storage, card]));
  console.log('save', storage);
  }
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}