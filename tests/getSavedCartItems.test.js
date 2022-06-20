const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {

  test('Testa se, ao executar a função getSavedCartItems o método localStorage.getItem é chamado.', async () => {
    await getSavedCartItems();
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  test('Testa se, ao executar a função getSavedCartItems o método localStorage.getItem é chamado com o argumento cartItems.', async () => {
    await getSavedCartItems();
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems');
  });

});
