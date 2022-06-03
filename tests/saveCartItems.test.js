const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Se ao chama-la fetch tambem e chamado', async () => {
    await saveCartItems(<ol><li>Item</li></ol>);
    expect(localStorage.setItem).toBeCalled();
  })
  it('Se ao chama-la fetch utiliza o endpoint', async () => {
    await saveCartItems(<ol><li>Item</li></ol>);
    expect(localStorage.setItem).toBeCalledWith('cartitems', <ol><li>Item</li></ol> );
  })
});
