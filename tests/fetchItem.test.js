require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');
  it('Testar se é uma função', async () => {
    const testFunc = typeof await fetchItem();
    const testResult = 'function';
    expect(testFunc).toBe(testResult);
  } );
  it('Executar a função com o argumento -MLB1615760527- para ver se retorna a fetch', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });
  it('Testar se o EndPoint ta correto', async () => {
    await fetchItem('MLB1615760527');
    const endpoint = 'https://api.mercadolibre.com/items/MLB1615760527';
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });
  it('Testar o retorno da função', async () => {
    const receberPara = await fetchItem('MLB1615760527');
    expect(receberPara).toEqual(item);
    // computadorSearch é chamado no inicio
  });
  it('Sem argumento retorna Erro', async () => {
    const semArgumento = await fetchItem('MLB1615760527');
    expect(semArgumento).toThrow('You must provide an url');
  });
});
