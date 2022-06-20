const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {

  it('Testing if saveCartItems is a function', () => {
    expect(typeof saveCartItems).toBe('function')
  });

  it('Testing if when saveCartItems is executed with: <ol><li>Item</li></ol> as an argument, localStorage.setItem is called', () => {
     saveCartItems('<ol><li>Item</li></ol>');
     expect(localStorage.setItem).toBeCalled();
   });
 
   it('Testing if when saveCartItems is executed with: <ol><li>Item</li></ol> as an argument, localStorage.setItem is called with the correct arguments', () => {
     saveCartItems('<ol><li>Item</li></ol>');
     expect(localStorage.setItem).toBeCalledWith('cartItems', '<ol><li>Item</li></ol>');
   });
   
});
