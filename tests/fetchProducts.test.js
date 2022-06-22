require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const fetchSimulator = require('../mocks/fetchSimulator');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Check if \`fetchProducts\' is a function.', async () => {
    expect(typeof fetchProducts).toBe('function')
  });
  it('Check if it returns \'You must provide an url\' when executing the function with parameter that does not exist.', async () => {
    const data = await fetchProducts();
    expect(data).toEqual(new Error('You must provide an url'))
  });
  it('Checks if using computer as parameter returns the correct object.', async () => {
    const data = await fetchProducts('computador');
    expect(data).toEqual(computadorSearch);
  });
  it('Testa se ao chamar com argumento computador o endpoint é correto', async () => {
    await fetchProducts('computador');
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    expect(fetch).toHaveBeenCalledWith(url);
  })
  it('Testa se ao chamar com argumento computador a fetch é chamada.', async () => {
  await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  })
});
