require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  it('Testando se é função', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  it('Testando se fetch é retornada quando passado o parametro "computador"', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  })
  it('Testa se com o argumento "computador", a função fetch utiliza o endpoint da URL', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador')
  })
  it('Teste se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch', async () => {
    const response = await fetchProducts('computador');
    expect(response).toBe(computadorSearch);
  })
  it('Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro', async () => {
    const response = await fetchProducts();
    expect(response).toEqual(new Error('You must provide an url'))
  })
  // fail('Teste vazio');
});
