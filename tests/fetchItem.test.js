require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  
  test('fetchItem é uma função.', () => {
    expect(typeof fetchItem).toStrictEqual('function')
  });

  test('Execute a função fetchItem com o argumento do item "MLB1615760527" e teste se fetch foi chamada;', async () => {
    await fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalled()
  })

  test('Executando a função fetchItem com o argumento "MLB1615760527" e teste se fetch utiliza endpoint', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
   });

   test('Executando a função fetchProducts com o argumento "computador" retorna o objeto item', async () => {
     expect(await fetchItem('MLB1615760527')).toEqual(item);
  });

  test('Executando a função fetchProducts sem argumento, retorna um erro', async () => {
     try {
       await fetchItem() 
     } catch (error) {
       expect(error).toStrictEqual(new Error('You must provide an url'));
     }
  });

});
