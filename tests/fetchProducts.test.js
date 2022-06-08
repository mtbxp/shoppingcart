require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  it('Verificar se `fetchProducts` é uma funçaõ', async () => {
    await expect(typeof fetchProducts).toBe('function');
  });
  it('Verificar se a função `fetchProducts` recebendo o parâmetro `computador`, testa se `fetch`foi chamado', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledTimes(1);
  });
  it('Verificar se a função `fetchProducts` utiliza o endpoint esperado', async () => {
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalledWith(url)
  });
  it('Verificar se o retorno da função `fetchProducts` recebendo o parâmetro `computador` tem sua estrutura igual ao objeto `computadorSearch`', async () => {
    const mockResult = await fetchProducts('computador');
    expect(mockResult).toStrictEqual(computadorSearch);
  });
  it('Verificar se ao chamar a função `fetchProducts` sem argumentos, retorna um erro com uma mensagem', async () => {
    const mockError = await fetchProducts();
    expect(mockError).toEqual(new Error('You must provide an url'));
  });
});
