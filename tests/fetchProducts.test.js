require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Teste se fetchProducts é uma função', async () => {
    const response = await fetchProducts;
    expect(typeof response).toBe('function');
  });
  
  it('Execute a função fetchProducts com o argumento computador e teste se fetch foi chamada', () => {
    await fetchProducts('computador');
    expect.assertions(1);
    expect(fetch).toHaveBeenCalled();
  });

  it('Teste fetchProducts(computador) com endpoint correto', async () => {
    await fetchProducts('computador');
    expect.assertions(1);
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    expect(fetch).toHaveBeenCalledWith(url);
  });

  it('Teste fetchProducts(computador) retorna um opjeto igual computadorSearch', async () => {
    
    
  });

  it('Teste fetchProducts() retorna erro', async () => {
    expect(await fetchProducts()).toThow('You must provide an url');
  });
});
