const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  const param = '<ol><li>Item</li></ol>';

  it('Ao executar a função, o metódo localStorage.setItem deverá ser chamado', () => {
    saveCartItems(param);
    expect(localStorage.setItem).toBeCalled();
  })
  it('Ao executar a função, o metódo localStorage deve receber como parâmetro:', () => {
    saveCartItems(param);
    expect(localStorage.setItem).toBeCalledWith('cartItems', param);
  })
});
