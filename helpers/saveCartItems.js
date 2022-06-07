/*
referencia
https://medium.com/@lameckanao/armazenando-e-manipulando-dados-no-localstorage-7bcc901ba12b
descobri q a resposta de um localStorage vazio e null
*/
const saveCartItems = (save) => {
  console.log('save');
  localStorage.setItem('cartItems', JSON.stringify(save));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
