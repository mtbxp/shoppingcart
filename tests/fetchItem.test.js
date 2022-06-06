require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  test('Teste se fetchItem é uma função;', async () => {
    const type = typeof fetchItem;
    expect(type).toBe('function');
  });

  test('Execute a função fetchItem com o argumento do item "MLB1615760527" e teste se fetch foi chamada', async () => {
    fetchItem('MLB1615760527');
    fetch('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });

  test('Teste se, ao chamar a função fetchItem com o argumento do item "MLB1615760527", a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527";', async () => {
  const itemId = 'MLB1615760527';
  const endpoint = `https://api.mercadolibre.com/items/${itemId}`;
  fetchItem('MLB1615760527');
  const fetchItemWithEndpoint = await fetch(endpoint);
  expect(endpoint).toBe('https://api.mercadolibre.com/items/MLB1615760527');
  });

  test('Teste se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item que já está importado no arquivo.', async () => {
    const itemId = 'MLB1615760527';
    const endpoint = `https://api.mercadolibre.com/items/${itemId}`;
    fetchItem('MLB1615760527');
    const fetchItemWithEndpoint = await fetch(endpoint);
    const response = await fetchItemWithEndpoint.json();
    expect(response).toEqual(item);
  });

  test('Teste se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: "You must provide an url".', async () => {
    try {
      const noURL = await fetch();
    } catch(error) {
      expect(error.message).toEqual('You must provide an url');
    }
  });
});
