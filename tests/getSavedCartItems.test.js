const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  // implemente seus testes aqui
  it('verifica se, ao executar getSaveCartItems, o método LocalStorage é chamado', () => {
    expect(getSavedCartItems()).toBeCalledWith(localStorage.getItem);
  });
  it('verifica se, ao executar getSavedCartItems, o localStorage.getItem pe chamado com o `cartItems` como parametro', () => {
    expect(getSavedCartItems()).toBeCalledWith(localStorage.getItem(cartItems));
  });
});
