require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  const argument = 'computador'
  test('Verifica se fetchProducts é uma função', async() => {
    expect(typeof fetchProducts).toBe('function');
  });
  test('Verifica se fetch é chamada quando a função é executada com o parâmetro "computador"', async() => {
    await fetchProducts(argument);
    expect(fetch).toHaveBeenCalled();
  });
  test('Testa se o fetch da função com o argumento "computador" utiliza o endpoint', async() => {
    await fetchProducts(argument);
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador')
  });
  test('Testa se o retorno da função com o argumento "computador" é uma estrutura de dados igual ao computadorSearch', async() => {
    const functionReturn = await fetchProducts(argument);
    expect(functionReturn).toEqual(computadorSearch);
  });
  test('Testa se o erro "You must provide an url" é retornado ao chamar a função sem argumento', async() => {
    const functionWithNoArguments = await fetchProducts();
    expect(functionWithNoArguments).toEqual(new Error('You must provide an url'));
  });
});
