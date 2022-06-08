require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Test the function fetchProducts', () => {
  it('tests if fetchProducts is a function', () => {
    expect(typeof fetchProducts).toBe('function');
  });

  it('tests if fetch is called, when fetchProducts is executed with the argument \'computador\'', async () => {
    expect.assertions(1);
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('tests if, by calling the function fetchProduct with the argument \'computador\', the function fetch use the endpoint \'https://api.mercadolibre.com/sites/MLB/search?q=computador\'', async () => {
    const url = "https://api.mercadolibre.com/sites/MLB/search?q=computador"
    expect.assertions(1);
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(url);
  });

  it('tests if the function fetchProduct with the argument \'computador\', return a data structure like the object from \'computadorSearch\'', async () => {
    const actual = await fetchProducts('computador');
    expect(actual).toEqual(computadorSearch);
  });

  it('tests if the function fetchProduct with no argument , return an error with the message: "You must provide an url"', async () => {
    const actual = await fetchProducts();
    expect(actual).toEqual(new Error('You must provide an url'));
  });
});
