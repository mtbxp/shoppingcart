require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  
  test('fetchProducts é uma função.', () => {
    expect(typeof fetchProducts).toStrictEqual('function')
  });
  
  test('Executando a função fetchProducts com o argumento "computador" e teste se fetch foi chamada', async () => {
   await fetchProducts('computador');
   expect(fetch).toHaveBeenCalled();
  });

  test('Executando a função fetchProducts com o argumento "computador" e teste se fetch utiliza endpoint', async () => {
    await fetchProducts('computador');
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
   });

   test('Executando a função fetchProducts com o argumento "computador" retorna o objeto computadorSearch', async () => {
     expect(await fetchProducts('computador')).toEqual(computadorSearch);
  });

  test('Executando a função fetchProducts sem argumento, retorna um erro', async () => {
     try {
       await fetchProducts() 
     } catch (error) {
       expect(error).toStrictEqual(new Error('You must provide an url'));
     }
  });

});