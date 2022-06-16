const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {

  test('Verifica se ao ser executada, o método "localStorage.getItem" é chamado',
    () => {
      getSavedCartItems();
      expect(localStorage.getItem).toBeCalled();
    })

  test('Verifica se ao ser executada, o método "localStorage.getItem" é chamado com o parâmetro "cartItems"',
    async () => {
      await getSavedCartItems();
      expect(localStorage.getItem).toBeCalledWith('cartItems');
    })

});
