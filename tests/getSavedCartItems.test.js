const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems: ', () => {
  // implemente seus testes aqui
  test('Teste se getSavedCartItems é uma função: ', () => {
    expect.assertions(1);

    expect(typeof getSavedCartItems).toBe('function');
  });
  test('Teste se ao chamar a função getSavedCartItems a função localStorage.getItem é chamada: ', () => {
    expect.assertions(2);
    const response = getSavedCartItems();

    expect(localStorage.getItem).toHaveBeenCalled();
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });
});
