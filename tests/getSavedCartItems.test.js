const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  // implemente seus testes aqui
  it('Testa se é uma função', () => {
    expect(typeof getSavedCartItems).toBe('function');
  })
  it('Testa se é chamado o localStorage.getItem', async () => {
    const resp = await getSavedCartItems('cartItems');
    expect(localStorage.getItem).toHaveBeenCalled();
  })
  it('Testa se é chamado o parametros cartItems ao chamar a função', async () => {
    const resp = await getSavedCartItems('cartItems');
    expect(localStorage.getItem).toBeCalledWith('cartItems');
  })
});
