const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  // implemente seus testes aqui
  it('Verificar se `getSavedCartItems` é uma função', async () => {
    await expect(typeof getSavedCartItems).toBe('function');
  });
  it('Verificar se o `localStorage.getItem` é chamado na função `getSavedCartItems`', async () => {
    await getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalled();
  });

  it('Verificar se o `localStorage.getItem` é chamado na função `getSavedCartItems` com parâmetros', async () => {
    await getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });
  it('Verificar a função `getSavedCartItems` retorna um erro com uma mensagem', async () => {
    const mockError = await getSavedCartItems();
    expect(mockError).toEqual(new Error('You must provide an url'));
  });
});
