const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  test('Verifica se getSavedCartItems é uma função', () => {
    expect(typeof getSavedCartItems).toBe('function')
  })
  test('Verifica se ao chamar a função getSavedCartItems o localStorage.getItem é chamado', () => {
    getSavedCartItems()
    expect(localStorage.getItem).toBeCalled;
  })
  test('Verifica se o método localStorage.getItem é chamado com o parametro "cartItems"', () => {
    getSavedCartItems()
    expect(localStorage.getItem).toBeCalledWith('cartItems');
  })
});
