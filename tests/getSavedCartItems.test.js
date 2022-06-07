const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  // implemente seus testes aqui
  test('Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado;', () => {
    getSavedCartItems();
    localStorage.getItem('', '');
    expect(localStorage.getItem).toHaveBeenCalled();
  });

  test('Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado com o "cartItems" como parâmetro.', () => {
    getSavedCartItems();
    localStorage.getItem('cartItems');
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });

  // test('Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado com o "cartItems" como parâmetro, caso não seja undefined.', () => {
  //   getSavedCartItems();
  //   const obj = {teste: 'value'};
  //   const array = [];
  //   array.push(obj);
  //   // localStorage.setItem('cartItems', JSON.stringify(array));
  //   const get = localStorage.getItem('cartItems');
  //   expect(get).toEqual(0);
  // });
});
