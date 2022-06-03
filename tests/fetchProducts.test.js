require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Test fetchProducts function', () => {
  it('Should be a function', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  it('Should call fetch function with argument `computador`', async () => {
    await fetchProducts('computador');
    expect.assertions(1);
    expect(fetch).toBeCalled();
  });
  it('Should call fetch function with expected endpoint, with argument `computador`', async () => {
    const url_ = 'https://api.mercadolibre.com/sites/MLB/search?q=computador'
    await fetchProducts('computador');
    expect.assertions(1);
    expect(fetch).toBeCalledWith(url_);
  });
  it('Should return the `computadorSearch` object given the argument `computador`', async () => {
    const result = await fetchProducts('computador');
    expect.assertions(1);
    expect(result).toEqual(computadorSearch);
  });
  it('Should return a error message given no argument', async () => {
    const result = await fetchProducts();
    expect.assertions(1);
    expect(result).toEqual(new Error('You must provide an url'));
  });
});
