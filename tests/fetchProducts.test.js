require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('teste se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  it('Ao chama a função fetchProducts com o argumento "computador", teste se fetch foi chamada', async () => {
    await fetchProducts('computador');
    expect(fetch).toBeCalled();
  });
  it("Ao chamar a função fetchProducts com o argumento 'computador', a função fetch utiliza o endpoint 'https://api.mercadolibre.com/sites/MLB/search?q=computador'", async () => {
    await fetchProducts('computador');
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });
  it('Teste se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch', async () => {
    const fetchComputer = await fetchProducts('computador');
    expect(fetchComputer).toEqual(computadorSearch);
  });
  it("ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: 'You must provide an url'", async() => {
    const testError = await fetchProducts();
    expect(testError).toEqual(new Error('You must provide an url'));
  });
});
