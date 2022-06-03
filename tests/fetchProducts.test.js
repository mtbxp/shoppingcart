require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  it('Check if fetchProducts is a function', () => {
    expect(fetchProducts).toBeInstanceOf(Object);
  });
  it('check if receiving the argument \'computador \' is called the fetch', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledTimes(1);
  });
  it('check if you pass the argument \'computador\' the fetch function uses the correct endpoint', async () => {
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(url);
  });
  it('check if you pass the argument \'computador\' a data structure is returned equal to the computer objectsearch', async () => {
    expect(await fetchProducts('computador')).toEqual(computadorSearch);
  });
  it('check if by calling the function without argument it returns the error with the message \'You must provide an url\'', async () =>{
    expect(await fetchProducts()).toThrow('You must provide an url');
  });
});
