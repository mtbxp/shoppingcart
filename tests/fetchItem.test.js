require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Verifica se fetchItem é uma função', ()=> {
    expect(typeof fetchItem).toBe('function')
  });

  it('Verifica se ao executar fetchItem com argumento MLB1615760527 se fetch foi chamada', async ()=> {
    await fetchItem('MLB1615760527')

     expect(fetch).toHaveBeenCalled()
  });

  it('Verifica se ao executar fetchItem com argumento MLB1615760527, fetchItem ultiliza endpoint https://api.mercadolibre.com/items/MLB1615760527', async ()=> {
    await fetchItem('MLB1615760527')

     expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527')
  });

  it('Verifica se o retorno da função fetchItem com arumento MLB1615760527 é uma estrutura de dados', async ()=> {
    const data = await fetchItem('MLB1615760527')

    expect(data).toEqual(item)
  });

  it('Verifica se ao executar a função fetchItem sem argumento, retorna o erro `You must provide an url`', async ()=> {
    await fetchItem()

    expect().toEqual( new Error('You must provide an url'))
  });
});
