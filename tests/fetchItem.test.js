require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('FechtItem deve ser uma funcao', () => {
    expect(typeof fetchItem).toBe('function')
  })

  it('Deve receber como argumento MLB1615760527 e verificar se fetch foi chamada', async () => {
    await fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalled();
  })

  it('Deve receber como argumento MLB1615760527 e a funcao deve utilizar o endpoint https://api.mercadolibre.com/items/MLB1615760527', async () => {
    await fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalledWith("https://api.mercadolibre.com/items/MLB1615760527");
  })

  it('O retorno da funcao fechItem com o argumento MLB1615760527, deve ser uma estrutura de dados igual ao objeto item', async () => {
    const result = await fetchItem('MLB1615760527');
    expect(result).toEqual(item);
  })

  it('Ao chamar a funcao fetchItem sem argumentos, deve retornar um erro com a mensagem You must provide an url', async () => {
    expect(await fetchItem()).toEqual(new Error('You must provide an url'));
  })
});
