/*
referencia
https://medium.com/@lameckanao/armazenando-e-manipulando-dados-no-localstorage-7bcc901ba12b
descobri q a resposta de um localStorage vazio e null
*/
const saveCartItems = (card) => {
  if (localStorage.getItem('cartItems') === null) {
    localStorage.setItem('cartItems', JSON.stringify([card]));
  } else if (typeof card === 'string') { 
    const storage = JSON.parse(localStorage.getItem('cartItems'));
    localStorage.setItem('cartItems', JSON.stringify([...storage, card]));
  // console.log('save', storage);
  } else {
    localStorage.setItem('cartItems', JSON.stringify(card));
  }
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}