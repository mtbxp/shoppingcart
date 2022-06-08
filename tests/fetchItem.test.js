require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // Teste se fetchItem é uma função;
  it('verifica se é função', () => {
    expect(typeof fetchItem).toBe('function');
  });

  // Execute a função fetchItem com o argumento do item "MLB1615760527" e teste se fetch foi chamada;
  it('argumento \'MLB1615760527\' e teste se fetch foi chamada', async () => {
    const expected = await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  // Teste se, ao chamar a função fetchItem com o argumento do item "MLB1615760527", a função fetch 
  // utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527";
  it('argumento \'MLB1615760527\' e teste se fetch foi chamada com endpoint', async () => {
    const url = 'https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem('MLB1615760527');
    await expect(fetch).toHaveBeenCalledWith(url);
  });

  // Teste se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de 
  // dados igual ao objeto item que já está importado no arquivo.
  it('é uma estrutura de dados igual ao objeto item', async () => {
    await expect(fetchItem('MLB1615760527')).resolves.toEqual(item);
  });

  // Teste se, ao chamar a função fetchItem sem argumento, retorna um erro 
  // com a mensagem: 'You must provide an url'.
  it('sem argumento, retorna um erro', async () => {    
    const result = await fetchItem();
    expect(result).toEqual(new Error('You must provide an url'));
  });
});
