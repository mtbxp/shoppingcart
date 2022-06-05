const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
 it('testando se saveCartItems é uma função', () => expect(typeof saveCartItems).toBe('function'));
  
 it('testando se quando saveCartItems é executado com <ol><li>Item</li></ol> como argumento, localStorage.setItem é chamado', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toBeCalled();
  });

  it('testando se quando saveCartItems é executado com <ol><li>Item</li></ol> como argumento, localStorage.setItem é chamado com os dois argumentos corretos', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toBeCalledWith('cartItems', '<ol><li>Item</li></ol>');
  });
});
