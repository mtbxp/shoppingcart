const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  // implemente seus testes aqui
  test('se, ao executar getSavedCartItems, o método localStorage.getItem é chamado', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalled();
  });

  test('se, ao executar getSavedCartItems, o método localStorage.getItem é chamado com o \'cartItems\' como parâmetro', () => {
    const param = 'cartItems';
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalledWith(param);
  });
});
