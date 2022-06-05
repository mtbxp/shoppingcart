require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  it('Testa se fetchProducts é do tipo função', () => {
    expect(typeof fetchProducts).toBe('function');
});
  it('Ao chamar a função fetchProducts com o argumento computador, testa se fetch é chamada', async() => {
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalled();
  })
  
  it('Testa se, ao chamar a função fetchProducts com o argumento computador, a função fetch utiliza o endpoint https://api.mercadolibre.com/sites/MLB/search?q=computador', async() => {
    const chamaUrl = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(chamaUrl);
  })

  it('Testa se o retorno da função fetchProducts com o argumento computador é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo.', async() => {
    const retorno = await fetchProducts('computador')
    expect(retorno).toEqual(computadorSearch)
  })

  it('Testa se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url', async() => {
    const chamaFuncao = await fetchProducts();
    expect(chamaFuncao).toEqual(new Error('You must provide an url'));
  })
})

