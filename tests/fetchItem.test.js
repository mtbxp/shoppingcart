require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  it('verifica sw fetchItem é uma função', () => {
    expect(fetchItem).toBeInstanceOf(Object);
  });
  it('verifica se ao chamar a função fetchItens com item "MLB1615760527" o fetch é chamado', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledTimes(1);
  });
  it('verifica se a função fetchItem usa o endpoint correto', async () => {
    const url = 'https://api.mercadolibre.com/items/MLB1615760527';
    expect(await fetchItem('MLB1615760527')).toHaveBeenCalledWith(url);
  });
  it('verifica se o retorno de fecthItens é igual ao objeto item', async () => {
    expect(await fetchItem('MLB1615760527')).toEqual(item);
  });
  it('verifica se ao chamar a função sem argumento retorna a mensagem: "You must provide an url"', () => {
    expect(fetchItem()).toEqual(new Error('You must provide an url'));
  });
});
