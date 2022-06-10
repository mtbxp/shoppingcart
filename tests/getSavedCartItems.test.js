const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  const parameter = 'cartItems';
  const actual = localStorage.getItem;
  test('verifica se a localStorage.getItem foi chamada, ao executar a função getSavedCartItems', () => {
    getSavedCartItems();
    expect(actual).toBeCalled();
  });

  test('verifica se a localStorage.getItem foi chamada, ao executar a função getSavedCartItems com o argumento "cartItems"', () => {
    getSavedCartItems();
    expect(actual).toBeCalledWith(parameter);
  });
});
