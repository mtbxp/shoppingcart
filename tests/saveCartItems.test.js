const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  const ol = document.createElement('ol')  // <ol><li>Item</li></ol>
  const li = document.createElement('li')
  li.innerText = 'Item';
  ol.appendChild(li)

  it('Should call localStorage.setItem when saveCartItems(<ol><li>Item</li></ol>) is called', async () => {
    await saveCartItems(ol);
    expect(localStorage.setItem).toHaveBeenCalled();
  })

  it('Should call localStorage.setItem with two params, cartItems and the list text.', async () => {
    await saveCartItems(ol);
    expect(localStorage.setItem).toBeCalledWith('cartItems', '["Item"]');
  })

  it('Should return function when typeof saveCartItems is called.', () => {
    expect(typeof saveCartItems).toBe('function');
  });

  it('Should return an error when getSavedCartItems is called with undefined.', async () => {
    const err = 'TypeError: Cannot read properties of undefined (reading \'childNodes\')';
    expect(await saveCartItems(undefined)).toEqual(new Error(`Um erro ocorreu. :c\n${err}`));
  });
});
