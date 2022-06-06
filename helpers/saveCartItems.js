/*
referencia
https://medium.com/@lameckanao/armazenando-e-manipulando-dados-no-localstorage-7bcc901ba12b
descobri q a resposta de um localStorage vazio e null
*/
const saveCartItems = (save, storage) => {
  // console.log('save', storage);
  localStorage.setItem('cartItems', JSON.stringify([...storage, save]));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
