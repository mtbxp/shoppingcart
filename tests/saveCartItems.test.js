const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');
describe('3 - Teste a função saveCartItems', () => {
  it('1-Testa com o argumento <ol><li>Item</li></ol>', () => {
    const arg ='<ol><li>Item</li></ol>'
    saveCartItems(arg);
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  it('2-Testacom o argumento <ol><li>Item</li></ol>', () => {
    const teste1 = 'cartItems';
    const teste2 = '<ol><li>Item</li></ol>';
    saveCartItems(teste2);
    expect(localStorage.setItem).toHaveBeenLastCalledWith(teste1, teste2);
  });
});
