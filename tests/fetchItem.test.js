require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  test('Se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });

  test('Se fetch foi chamada', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });

  test('ao chamar a função fetchItem com o argumento do item "MLB1615760527", a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527"', async () => {
    const url = 'https://api.mercadolibre.com/items/MLB1615760527'
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalledWith(url);
  });

  test('Se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto "item" que já está importado no arquivo', async () => {
    const resultadoEsperado = await fetchItem('MLB1615760527');
    expect(resultadoEsperado).toEqual(item);
  });
});