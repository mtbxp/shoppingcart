require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Verifica se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  })
  it('Executa a função fetchProducts com o argumento \'computador\' e testa se fetch foi chamada', async () => {
    await fetchProducts("computador");
    expect(fetch).toHaveBeenCalled();
  })
  it('Verifica se ao chamar a função fetchProducts com o argumenro \'computador\', a função fetch utiliza o endpoint \'https://api.mercadolibre.com/sites/MLB/search?q=computador\'', async () => {
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts("computador");
    expect(fetch).toBeCalledWith(endpoint);
  })
  it('Verifica se o retorno da função fetchProducts com o argumento \'computador\' é uma estrutura de dados igual ao objeto computadorSearch', async () => {
    const result = await fetchProducts('computador');
    expect(result).toEqual(computadorSearch);
  })
  it('Verifica se ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: \'You must provide an url\'', async () => {
    const result = await fetchProducts();
    expect(result).toEqual(new Error('You must provide an url'));
  })
});
