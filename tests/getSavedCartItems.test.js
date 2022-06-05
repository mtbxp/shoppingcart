const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  // implemente seus testes aqui
  it('Teste se o getSavedCartItems localStorage.getItem', async () => {
    await getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalled();
  });

  it('Teste se o getSavedCartItems localStorage.getItem é chamado passando parâmetro', async () => {
    await getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });
});
