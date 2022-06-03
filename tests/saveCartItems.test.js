const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('test the function saveCartItems', () => {
  it('when executing saveCartItems, method [] is called', async () => {
    await saveCartItems('<ol><li>Item</li></ol>');

    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
