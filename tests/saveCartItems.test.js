const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('When saveCartItems is run with <ol><li>Item</li></ol> as argument, localStorage.setItem is called', async () => {
    await saveCartItems(<ol><li>Item</li></ol>);
    expect(localStorage.setItem).toBeCalled();
  });
  
});
