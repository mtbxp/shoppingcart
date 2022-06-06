const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Se ao chama-la localStorage tambem e chamado', () => {
    saveCartItems('MLB2131342947');
    expect(localStorage.setItem).toBeCalled();
  })
  it('Se ao chama-la localStorage utiliza cartItems e MLB2131342947', async () => {
    saveCartItems('MLB2131342947');
    expect(localStorage.setItem).toBeCalledWith('cartItems', "[\"MLB2131342947\"]");
  })
});
