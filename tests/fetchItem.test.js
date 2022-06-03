require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

const id = 'MLB1615760527';

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  test('Se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });
  test('Se fetch foi chamado junto à fetchItem', async () => {
    await fetchItem(id);
    expect(fetch).toHaveBeenCalled();
  });
  test('Se ao chamar a fecthItem, fetch deve receber uma url específica', async () => {
    const url = 'https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem(id);
    expect(fetch).toHaveBeenCalledWith(url);
  });
  test('Se o retorno de fetchItem é um objeto igual a item', async () => {
    const data = await fetchItem(id);
    expect(data).toStrictEqual(item);
  });
  test('Se, caso fetchItem seja chamado sem argumento, retorna a mensagem de erro', async () => {
    const data = await fetchItem();
    expect(data).toEqual(new Error('You must provide an url'));
  });
});
