require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  it ('Teste se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function')
  });
  it('Verifica se fetch foi chamada quando a função tem como argumento "computador"', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
  it('Verifica se ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador"', async () => {
    await fetchProducts('computador');
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=computador`;
    expect(fetch).toBeCalledWith(url);
  });
  it('Verifica se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto "computadorSearch"', async () => {
    const result = await fetchProducts('computador');
    expect(result).toEqual(computadorSearch);
  });
  it('Verifica se ao chamar a função fetchProducts sem argumento retorna um erro com a mensagem "You must provide an url"', async () => {
    const result = await fetchProducts();
    expect(result).toEqual(new Error('You must provide an url'));
  });
});
