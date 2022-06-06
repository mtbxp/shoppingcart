require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Should be a function', () => {
    expect(typeof (fetchProducts)).toEqual('function');
  });
  it('Should call fetch if the function have "computador" as parameter', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
  it('Uses the endpoint (url) if the function have "computador" as parameter', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });
  test('If the function returns the correct data', async () => {
    expect(await fetchProducts('computador')).toEqual(computadorSearch.results);
  });
  test('If the function returns an error when called without parameter', async () => {
    expect(await fetchProducts()).toEqual(new Error('You must provide an url'));
  });
});
