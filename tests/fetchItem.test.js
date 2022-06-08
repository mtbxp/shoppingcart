require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  it('Verificar se a função `fetchItem` é uma função', async () => {
    await expect(typeof fetchItem).toBe('function');
  });
  it('Verificar se a função `fetchItem` recebendo o parâmetro `MLB1615760527`, testa se `fetch`foi chamado', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledTimes(1);
  });
  it('Verificar se a função `fetchItem` utiliza o endpoint esperado', async () => {
    const url = 'https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(url);
  });
  it('Verificar se o retorno da função `fetchItem` recebendo o parâmetro `MLB1615760527` tem sua estrutura igual ao objeto `item`', async () => {
    const mockResult = await fetchItem('MLB1615760527');
    expect(mockResult).toStrictEqual(item);
  });
  it('Verificar se ao chamar a função `fetchItem` sem argumentos, retorna um erro com uma mensagem', async () => {
    const mockError = await fetchItem();
    expect(mockError).toEqual(new Error('You must provide an url'));
  });
});
