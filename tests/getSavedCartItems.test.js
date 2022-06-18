const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Testa se uma função é chamada', () => {
    getSavedCartItems();
    const expected = localStorage.getItem;
    expect(expected).toBeCalled();
  });

  it('Testa se uma função é chamada com determinados parâmetros', () => {
    getSavedCartItems();
    const expected = localStorage.getItem;
    const parameter = 'cartItems';
    expect(expected).toBeCalledWith(parameter);
  });
});
