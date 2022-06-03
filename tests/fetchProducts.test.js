require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  it('Executando a função fetchProducts, fetch foi chamada', async () => {
    await fetchProducts('computador');
    expect(fetch).toBeCalled();
  });
  it('Ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint esperado', async () => {
    const urlExpected = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');
    expect(fetch).toBeCalledWith(urlExpected);
  });
  it('o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto esperado', async () => {
    expect(await fetchProducts('computador')).toEqual(computadorSearch);
  });
  it('ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: "You must provide an url"', async () => {
    expect(await fetchProducts()).toEqual(new Error('You must provide an url'));
  })
});
