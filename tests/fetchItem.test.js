require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');
  test('testa se fetchItem é uma função', () => {
  expect(typeof fetchItem).toBe('function');
  });

  test('testa se a função é chamada ao receber o parametro MLB1615760527', async () => {
  await fetchItem('MLB1615760527');
  const fetchItemEndpoint =  'https://api.mercadolibre.com/items/MLB1615760527';
  expect(fetch).toHaveBeenCalled();
  expect(fetch.toHaveBeenCalledWith(fetchItemEndpoint));
  });

  test('testa se ao receber o parametro MLB1615760527 a função retorna uma estrutura de dados igual ao objeto item', async () => {
  const retornoFetchItem = await fetchItem('MLB1615760527');
  expect(retornoFetchItem).toEqual(item);
  })

  test('testa se ao chamar a função fetchItem sem argumento retorna um erro com a mensagem You must provide an url', async () =>{
    const fetchItemVazio = await fetchItem();
    expect(fetchItemVazio).toEqual(new Error('You must provide an url'));
  })
  
});
