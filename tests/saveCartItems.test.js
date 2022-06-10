const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  it('1 O método localStorage.setItem é chamado correto', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toBeCalled();
  });
  it('2 é chamado com dois parâmetros', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    const response = JSON.stringify('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toBeCalledWith('cartItems', response);
  });
});
