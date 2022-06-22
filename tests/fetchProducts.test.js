require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('testar se é função', () =>{
    expect(typeof fetchProducts).toBe('function');
  })

  it('Execute a função fetchProducts com o argumento computador e teste se fetch foi chamada', async () =>{
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledWith(url);
  })

  it('se é igual a computadorSearch', async () => {
    expect(await fetchProducts('computador')).toEqual(computadorSearch);
  })

  it('testando função sem argumento', async () =>{
    const falha = await fetchProducts();
    expect(falha).toEqual(new Error('You must provide an url.'));
  })
});
