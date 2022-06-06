const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Deveria chamar localStorage.setItem quando saveCartItems é chamado', () => {
    expect.assertions(1);
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  it('Deveria chamar localStorage.setItem com dois parâmetros "keyName", "cartData"', () => {
    expect.assertions(1);
    const cartData = '<ol><li>Item</li></ol>';
    const keyName = 'cartItems';
    saveCartItems(cartData);
    expect(localStorage.setItem).toHaveBeenCalledWith(keyName, cartData);
  });

  it('Deveria retornar um Error se nenhum parâmetro for passado', () => {
    expect.assertions(1);
    const result = saveCartItems();
    expect(result).toEqual(new Error('Você deve providenciar o parâmetro "data"'));
  });
});
