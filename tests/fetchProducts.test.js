require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');
const url  = 'https://api.mercadolibre.com/sites/MLB/search?q=computador'

describe('1 - Teste a função fetchProducts', () => {
  it('verifica se é uma função', async() => {
    expect(typeof await fetchProducts).toBe('function');
  })
  it('a função com o argumento "computador" foi chamada', async() => {
    await fetchProducts('computador');
    expect(fetch).toBeCalled();
  })
  it('se a função com o argumento "computador" utiliza o endpoint correto', async() => {
    await fetchProducts('computador');
    expect(fetch).toBeCalledWith(url);
  })
  it('se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto "computadorSearch"', async() => {
    const result = await fetchProducts('computador');
    expect(result).toStrictEqual(computadorSearch);
  })
  it('ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: "You must provide an url"', async() => {
    const resultError = await fetchProducts();
    expect(resultError).toEqual(new Error('You must provide an url'));
  })
});
