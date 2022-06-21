require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  
  test('Teste se fetchProducts é uma função', async () => {
    expect(typeof fetchProducts).toBe('function');
  })

  test('caso receba do parametro computador o fetch retorna o endpoint https://api.mercadolibre.com/sites/MLB/search?q=computador', () => {
    fetchProducts('computador');

    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  })

  test('caso o parametro seja computador o fetch é chamado', () => {
    fetchProducts('computador');

    expect(fetch).toBeCalled();
  })

  test('Teste se o retorno da função fetchProducts com o argumento computador é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo', async () => {
    

    expect(await fetchProducts('computador')).toEqual(computadorSearch);
  })

  test('Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url', async () => {

    expect(await fetchProducts()).toEqual(new Error('You must provide an url'));
  })

});