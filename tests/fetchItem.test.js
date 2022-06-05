require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui!
  it('Testa se fetchProducts é do tipo função', async() => {
    expect(typeof fetchItem).toBe('function');
  })

  it('Ao chamar a função fetchItem com o argumento MLB1615760527, testa se fetch é chamada', async() => {
    await fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalled();
  })

  it('Testa se, ao chamar a função fetchItem com o argumento do item "MLB1615760527", a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527"', async() => {
    const chamaUrl = 'https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(chamaUrl);
  })

  it('Testa se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item que já está importado no arquivo.', async() => {
    const retorno = await fetchItem('MLB1615760527')
    expect(retorno).toEqual(item);
  })
  
  it('Teste se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: You must provide an url', async() => {
    const chamaFuncao = await fetchItem()
    expect(chamaFuncao).toEqual(new Error('You must provide an url'));
  })
});
