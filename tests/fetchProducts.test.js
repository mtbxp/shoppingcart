require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  
  test('Se a função fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe("function");
  });

  // test('Se função fetchProducts com o argumento computador e teste se fetch foi chamada', async () => {
  //   await fetchProducts('computador');
  //   expect(fetch).toBeCalled();
  // });

  // test('Testa se  ao chamar a função argumento "computador", a função fetch utiliza o endpoint ""', async () => {
  //   await fetchProducts('computador');
  //     expect(fetch).toBeCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  //   })
  // //fail('Teste vazio');
})

// npm test fetchProducts
