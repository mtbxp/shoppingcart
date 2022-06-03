require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  test('se fetchProducts é uma função', ()=>{
    expect(typeof fetchProducts).toBe('function');
  })
  test('se, ao chamar a função fetchProducts com o argumento computador, a função fetch utiliza o endpoint correto', async () => {
    await fetchProducts('computador')
    const endPoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    expect(fetch).toBeCalledWith(endPoint);
  })
  test('se o retorno da função fetchProducts com o argumento computador é uma estrutura de dados igual ao objeto computadorSearch', async () => {
    expect(await fetchProducts('computador')).toEqual(computadorSearch);
  })
  test('Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url', async () => {
    const erro = new Error ('You must provide an url')
    expect(await fetchProducts()).toEqual(erro);
  })
});
