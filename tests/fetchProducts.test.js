require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  test ('Verifica se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function')
  })
  test('Verifica se: ao ser chamada com o argumento "computador", retorna a resposta da url : ', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
    // Use .toHaveBeenCalled para garantir que uma função de simulação (mock, em inglês) foi chamada com argumentos específicos. link: https://jestjs.io/pt-BR/docs/expect#tohavebeencalled
  })
  test('Verifica se: ao ser chamada com o argumento "computador", a função fetch realiza uma requisição pela url correta',
   async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  })
  test('Verifica se: ao ser chamada com o argumento "computador", o retorno da função é uma estrutura de dados igual ao objeto computadorSearch',
   async () => {
    expect(await fetchProducts('computador')).toEqual(computadorSearch);
  })
  test('Verifica se ao ser chamada sem argumento, o retorno da função é a mensagem de erro: "You must provide an url"',
   async () => {
    expect(await fetchProducts()).toThrow('You must provide an url');
  })
});
