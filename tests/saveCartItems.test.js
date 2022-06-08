const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('', async () => {
    await saveCartItems('<ol><li>Item</li></ol>');

    expect(localStorage.setItem).toHaveBeenCalled();
  });
  it('', async () => {
    const myLi = '<ol><li>Item</li></ol>';
    await saveCartItems(myLi);

    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', myLi);
  });
});
