require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  
  test('Se a função fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe("function");
  });

  test('Se função fetchProducts com o argumento computador e teste se fetch foi chamada', async () => {
    await fetchProducts('computador');
    expect(fetch).toBeCalled();
  });

  test('Testa se  ao chamar a função argumento "computador", a função fetch utiliza o endpoint ""', async () => {
    await fetchProducts('computador');
      expect(fetch).toBeCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
    })
  
  test('Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem', async () => {
    const expected = await fetchProducts();
    expect(expected).toEqual(new Error('You must provide an url'));
  });

  test('Teste se fetchProducts com o argumento computador é uma estrutura de dados igual ao objeto computadorSearch', async () => {
    const expected = await fetchProducts('computador');
    expect(expected).toStrictEqual(computadorSearch);
  });
})
