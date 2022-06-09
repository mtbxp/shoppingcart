require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  it('Testar se é uma função', async () => {
    const testFunc = typeof await fetchProducts();
    const testResult = 'function';
    expect(testFunc).toBe(testResult);
  } );
  it('Executar a função com o argumento -computador- para ver se retorna a fetch', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
  it('Testar se o EndPoint ta correto', async () => {
    await fetchProducts('computador');
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });
  it('Testar o retorno da função', async () => {
    const receberPara = await fetchProducts('computador');
    expect(receberPara).toEqual(computadorSearch);
    // computadorSearch é chamado no inicio
  });
  it('Sem argumento retorna Erro', async () => {
    const semArgumento = await fetchProducts();
    expect(semArgumento).toThrow('You must provide an url');
  });
  // fail('Teste vazio');
});
