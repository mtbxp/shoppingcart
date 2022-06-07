const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  // implemente seus testes aqui
  test('Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado;', () => {
    try {
      getSavedCartItems();
    } catch(error) {
      expect(error.message).toEqual('Unexpected token u in JSON at position 0');
    }
  });

  // test('Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado com o "cartItems" como parâmetro.', () => {
  //   getSavedCartItems();
  //   localStorage.getItem('cartItems');
  //   expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  // });

  // test('Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado com o "cartItems" como parâmetro, caso não seja undefined.', () => {
  //   const obj = {teste: 'value'};
  //   const array = [];
  //   array.push(obj);
  //   // localStorage.setItem('cartItems', JSON.stringify(array));
  //   localStorage.getItem('cartItems');
  //   getSavedCartItems();
  //   // expect(getSavedCartItems()).toEqual(undefined);
  //   expect(localStorage.getItem('cartItems')).toEqual(0);
  // });
});
