const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('se chamada com o argumento <ol><li>Item</li></ol> o localStorage é chamado', () => {
    const test = '<ol><li>Item</li></ol>';
    saveCartItems(test);
    expect(localStorage.setItem).toHaveBeenCalled();
  });
  it('com o mesmo argumento deve retornar localStorage com os parametros certos', () => {
    const test = '<ol><li>Item</li></ol>';
    saveCartItems(test);
    expect(localStorage.setItem).toHaveBeenCalledWith(localStorageSimulator(cartItems, test));
  })
});
