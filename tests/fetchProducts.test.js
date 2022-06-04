require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  
  it('Teste se fetchProducts é uma função', async () => {
    expect(typeof fetchProducts).toBe('function');
  });

  it('Execute a função fetchProducts com o argumento computador e teste se fetch foi chamada', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('Teste fetchProducts(computador) com endpoint correto', async () => {
    await fetchProducts('computador');
    expect.assertions(1);
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    expect(fetch).toHaveBeenCalledWith(url);
  });

  it('Teste fetchProducts(computador) retorna um opjeto igual computadorSearch', async () => {
    const resp = await fetchProducts('computador');
    expect(typeof resp).toEqual(typeof computadorSearch);
  });

  it('Teste fetchProducts() retorna erro', async () => {
    try {
      await fetchProducts();
    } catch (err) {
      expect(err).toEqual(new Error('You must provide an url'));
    }
  });
});
