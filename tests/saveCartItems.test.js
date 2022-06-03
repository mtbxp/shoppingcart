const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('test the function saveCartItems', () => {
  it('when executing saveCartItems, method [] is called', async () => {
    await saveCartItems('<ol><li>Item</li></ol>');

    expect(localStorage.setItem).toHaveBeenCalled();
  });

  it('when executing saveCartItems, method [] is called', async () => {
    const arg = '<ol><li>Item</li></ol>';
    await saveCartItems(arg);

    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', arg);
  });
});
