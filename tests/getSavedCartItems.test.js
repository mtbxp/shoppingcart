const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  // implemente seus testes aqui
  //fail('Teste vazio');
  test('Testar se getSavedCartItems localStorage.getItem é chamado', async () => {
  await getSavedCartItems()
  expect(localStorage.getItem).toHaveBeenCalled();
  });
  test('Testar se getSavedCartItems localStorage.getItem é chamado', async () => {
    await getSavedCartItems()
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems')
  });
});

