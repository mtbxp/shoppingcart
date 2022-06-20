const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
it('Testando se o localStorage.getItem é chamado com a execução da função', async () => {
getSavedCartItems();
expect(await localStorage.getItem).toBeCalled();
});
it('Testa localStorage é chamado com 2 parâmetros', async () => {
  getSavedCartItems('cartItems')
  expect(await localStorage.getItem).toBeCalledWith('cartItems');
});
});
