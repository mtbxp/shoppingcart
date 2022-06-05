const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('o método localStorage.setItem é chamado', ()=>{
    saveCartItems('<ol><li>Item</li></ol>')
    expect(localStorage.setItem).toHaveBeenCalled()
  })
  it('', ()=>{
    saveCartItems('<ol><li>Item</li></ol>')
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', '<ol><li>Item</li></ol>')
  })

});
