const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  test('Teste se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado;', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toBeCalled();
  });
  
  test('Teste se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado;', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toBeCalledWith('cartItems', '<ol><li>Item</li></ol>');
  });
});


// const saveCartItems = (item) => {
//   const arrlist = [];
//   const result = JSON.parse(localStorage.getItem('cartItems'));
//   if (result) { 
//     result.push(JSON.parse(item));
//     localStorage.setItem('cartItems', JSON.stringify(result));
//   } else {
//     arrlist.push(JSON.parse(item));
//     localStorage.setItem('cartItems', JSON.stringify(arrlist));
//   }
// };