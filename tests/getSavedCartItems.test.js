const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Should call localStorage.setItem when getSavedCartItems() is called', async () => {
    await getSavedCartItems();
    expect(localStorage.setItem).toHaveBeenCalled();
  })

  it('Should call localStorage.setItem with \'cartItems\' as parameter when getSavedCartItems is called', async () => {
    await getSavedCartItems('');
    expect(localStorage.setItem).toBeCalledWith('cartItems');
  })

  it('Should return new Error (\'Occorreu um erro. :c\') when getSavedCartItems is called with an invalid parameter.', async () => {
    expect(await getSavedCartItems('INVALID')).toEqual(new Error('Occorreu um erro. :c'));
  });

  it('Should return function when typeof getSavedCartItems is called.', () => {
    expect(typeof getSavedCartItems).toBe('function');
  });
});
