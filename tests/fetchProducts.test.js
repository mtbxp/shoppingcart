require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts ', () => {
  // fail('Teste vazio');
  it ('Retorna se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  it('Testa se fetch foi chamado quando passado o argumento "computador" para função fetchProducts', async () => {
    const fetch = jest.fn();
    await fetchProducts(fetch(), 'computador');
    expect(fetch).toBeCalled();
  });
  it('Teste se, ao chamar a função fetchProducts com o argumento "computador" , a função fetch utiliza o endpoint " https://api.mercadolibre.com/sites/MLB/search?q=computador "', async () => {
    const apiEndPoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador'
    const fetch = jest.fn();
    await fetchProducts('computador');
    expect(fetch()).toBeCalledWith(apiEndPoint);
  });
  it('Teste se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch', async () => {
    await expect(fetchProducts('computador')).toEqual(computadorSearch);
  });
  it('Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: "You must provide an url"', async () => {
    await expect(fetchProducts()).toEqual(new Error('You must provide an url'));
  });
});
