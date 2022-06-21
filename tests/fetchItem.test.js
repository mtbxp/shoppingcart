require('../mocks/fetchSimulator');
const { TestScheduler } = require('jest');
const { fetchItem } = require('../helpers/fetchItem');
const { fetchProducts } = require('../helpers/fetchProducts');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {

  test('Teste se fetchProducts é uma função', async () => {
    expect(typeof fetchItem).toBe('function');
  })

  test('Execute a função fetchItem com o argumento do item "MLB1615760527" e teste se fetch foi chamada', async () => {
    fetchItem('MLB1615760527');

    expect(fetch).toBeCalled();
  })

  test('Teste se, ao chamar a função fetchItem com o argumento do item "MLB1615760527", a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527";', () => {
    fetchItem('MLB1615760527');

    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  })

  test('Teste se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item que já está importado no arquivo.', async () => {
    const exepected = await fetchItem('MLB1615760527');

    expect(exepected).toEqual(item);
  })

test('Teste se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: You must provide an url', async () => {
  expect(await fetchItem()).toEqual(new Error('You must provide an url'));
})
  });
