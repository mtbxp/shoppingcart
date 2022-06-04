require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Teste se fetchProducts é uma função', async () => {
    expect(typeof fetchProducts).toBe('function');
  });
  it(`Quando a função fetchProducts é executada com o argumento 'computador', a fetch é chamada`, async () => {
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalled();
  })
  it(`Teste se, ao chamar a função fetchProducts com o argumento 'computador', a função fetch utiliza o endpoint 'https://api.mercadolibre.com/sites/MLB/search?q=computador'`, async () => {
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador'
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalledWith(url);
  })
  it(`Teste se o retorno da função fetchProducts com o argumento 'computador' é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo.`, async () => {
    const search = await fetchProducts('computador')
    expect(search).toEqual(computadorSearch);
})
  it(`Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: 'You must provide an url'`, async () => {
     const response = await fetchProducts();
    expect(response).toEqual(new Error('You must provide an url'));
  })
});
