const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');
const data = <ol><li>Item</li></ol>;

describe('3 - Teste a função saveCartItems',async () => {
  it('deve chamar o método localStorage.setItem ao excutar o argumento saveCartItems', () => {
    saveCartItems(data);
    expect(localStorage.setItem).toBeCalled();
  });
  it('deve chamar os parametros cartItems e saveCartItems', () => {
    saveCartItems(data);
    expect(localStorage.setItem).toBeCalledWith('cartItems', data);
  });
});
