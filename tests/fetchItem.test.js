require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Testa se fetchItem é função', () => {
    expect(typeof fetchItem).toBe('function');
  });
  it('Execute a função fetchItem com o argumento do item "MLB1615760527" e teste se fetch foi chamada', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalled();
  });
  it('Testa se quando a função é executada com o argumento do item "MLB1615760527" a fetch utiliza o endpoint', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalledWith(url);
  });
  it('Testa se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item que já está importado no arquivo.', async () => {
    expect(typeof await fetchItem('MLB1615760527')).toBe(typeof item);
  });
  it('Teste se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem', async () => {
    try {
      await fetchItem();
    } catch(error) { 
      expect(error).toEqual(new Error('You must provide an url'))
  }
});
});
