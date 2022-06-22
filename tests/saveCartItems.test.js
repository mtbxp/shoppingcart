const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('deve chamar o método localStorage.setItem ao excutar o argumento saveCartItems', async () => {
    
    const actual = '<ol><li>Item</li></ol>';
    saveCartItems(actual);
    
    expect(localStorage.setItem).toBeCalled();
  });
  it('deve chamar os parametros cartItems e saveCartItems', () => {

    const actual = '<ol><li>Item</li></ol>';  
    saveCartItems(actual);

    expect(localStorage.setItem).toBeCalledWith('cartItems', data);
  });
});
