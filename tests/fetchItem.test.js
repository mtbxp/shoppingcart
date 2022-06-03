require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');
  it('deve ser um função', () => {
    expect(typeof fetchItem).toEqual('function');
  });
  it('deve passar o argumento MLB1615760527 chamar o fetch', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });
  it('deve chamar o fetch com o link da api como argumento', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });
  it('deve retornar uma estrutura de dados igual ao computadorSearch', async () => {
    expect(await fetchItem('MLB1615760527')).toEqual(item);
  })
  it('caso nenhum parametro seja passado, deve retornar um erro com a mensagem: You must provide an url', async () => {
    expect(await fetchItem()).toEqual(new Error('You must provide an url'));
  });
});
