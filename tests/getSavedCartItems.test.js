const localStorageSimulator = require('../mocks/localStorageSimulator');
const modules = require('../helpers/getSavedCartItems');
const getSavedCartItems = modules.getSavedCartItems;
const loadSavedCartItems = modules.loadSavedCartItems;

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Should call localStorage.getItem when getSavedCartItems(\'cartItems\') is called', async () => {
    await getSavedCartItems('cartItems');
    expect(localStorage.getItem).toHaveBeenCalled();
  });

  it('Should call localStorage.getItem with cartItems as parameter when getSavedCartItems(\'cartItems\') is called', async () => {
    await getSavedCartItems('cartItems');
    expect(localStorage.getItem).toBeCalledWith('cartItems');
  });

  //spyOn().and.callfake referência: https://jestjs.io/docs/jest-object#jestspyonobject-methodname
  it('Should call localStorage.getItem when getSavedCartItems is called', async () => {
    spyOn(window.localStorage, 'getItem').and.callFake(() => 'fakeCall')
    await getSavedCartItems('cartItems');
    expect(localStorage.getItem).toHaveBeenCalled();
  });

  it('Should call JSON.parse when getSavedCartItems is called', async () => {
    spyOn(JSON, 'parse').and.callFake(() => 'fakeCall')
    await getSavedCartItems('cartItems');
    expect(JSON.parse).toHaveBeenCalled();
  });

  it('Should be able to go through the entire function and return undefined when no error occurs', async () => {
    spyOn(JSON, 'parse').and.callFake(() => ['fakeCall'])
    expect(await getSavedCartItems('cartItems')).toBe(undefined);
  });

  it('Should return an error when getSavedCartItems is called with an invalid parameter.', async () => {
    const err = 'SyntaxError: Unexpected token u in JSON at position 0'
    expect(await getSavedCartItems('INVALID')).toEqual(new Error(`Um erro ocorreu. :c\n${err}`));
  });

  it('Should return function when typeof getSavedCartItems is called.', () => {
    expect(typeof getSavedCartItems).toBe('function');
  });

  // loadSavedCartItems TESTS

  it('Should return an error when loadSavedCartItems is called with an invalid parameter.', async () => {
    const err = 'TypeError: Cannot read properties of null (reading \'appendChild\')';
    expect(await loadSavedCartItems('INVALID')).toEqual(new Error(`Um erro ocorreu. :c\n${err}`));
  });

  it('Should return function when typeof loadSavedCartItems is called.', () => {
    expect(typeof loadSavedCartItems).toBe('function');
  });
});
