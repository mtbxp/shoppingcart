const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {

  it('test if fectchProducts is a function', async () => {
    const actual = saveCartItems('<ol><li>Item</li></ol>');
    expect(actual).toHaveBeenCalledWith(localStorageSimulator);
  })

  it('test if fectchProducts is a function', async () => {
    const actual = saveCartItems('<ol><li>Item</li></ol>');
    expect(actual).toHaveBeenCalledWith(localStorageSimulator(cartItems, saveCartItems()));
  })
});
