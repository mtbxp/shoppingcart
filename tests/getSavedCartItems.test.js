const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  // implemente seus testes aqui
  test("Testa se o método localStorage.getItem é chamado", () => {
    getSavedCartItems();
    expect(localStorage.getItem).toBeCalled();
  });

  test("Testa se o método localStorage.getItem é chamado com o parametro 'cartItems'", () => {
    getSavedCartItems();
    expect(localStorage.getItem).toBeCalledWith('cartItems');
  });
});
