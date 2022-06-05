const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('', async () =>{

    getSavedCartItems('<ol><li>Item</li></ol>')
    expect(localStorage.setItem).toHaveBeenCalled()

  })
});
