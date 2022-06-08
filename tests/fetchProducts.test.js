require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  it('Testa se fetchProducts é uma função', async () => {
    expect(typeof fetchProducts).toBe('function'); 
  });
  it('Testa se a função é chamada com o argumento computador', async () => {
    const computador = await fetchProducts('computador');//executa a função 
    expect(fetch).toHaveBeenCalled();
  });
  it('testa endpoint', async () => {
    await fetchProducts('computador');
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });
  it('testa se retorna erro', async () => {
    const retorno = await fetchProducts();
    expect(retorno).toEqual(new Error ('You must provide a url'));
  });
});

