require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Testa se fetchItem é uma função', async () => {
    expect(typeof fetchItem).toBe('function');
  });
  it('verificar se ao passar o parametro MLB1615760527 fetch é chamado', async () => {
    expect(await fetchItem('MLB1615760527')).not.toBeUndefined();
  });
  it(' Teste  a função fetchItem com o parametro "MLB1615760527"', async () => {
  const res = await fetchItem('MLB1615760527');
    expect(res.id).toEqual('MLB1615760527');
  });
  it('Teste o retorno da função fetchItem ', async () => {
    expect(await fetchItem('MLB1615760527')).toEqual(item);
  });

  it('verificar se retorna erro , a mensagem do erro "You must provide an url"', async () => {
    expect(await fetchItem()).toEqual(new Error('You must provide an url'));
  });
});
