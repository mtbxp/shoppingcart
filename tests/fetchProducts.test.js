// require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Teste se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });

  it("Teste se ao passar o argumento 'computador' para a funçao, se a fetch foi chamada;", async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
    
  });

  it("Teste se, ao chamar a função fetchProducts com o argumento 'computador' , a função fetch utiliza o endpoint 'https://api.mercadolibre.com/sites/MLB/search?q=computador'", async () => {
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador'
  await fetchProducts('computador');
  expect(fetch).toHaveBeenCalledWith(url)
  })

  it("Teste se o retorno da função fetchProducts com o argumento 'computador' é uma estrutura de dados igual ao objeto computadorSearch", async () => { 
  expect ( await fetchProducts('computador')).toEqual('computadorSearch')
  })

  it("Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: 'You must provide an url'", async () => {
    expect(await fetchProducts()).toEqual(new Error('You must provide an url'));
  })
});
