require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  test('Testa se o objeto fetchProducts é do tipo function', () => {
    const objectType = typeof fetchProducts;
    expect(objectType).toBe('function');
  });

  test('Testa se quando fetchProducts("computador") é executada, o fetch é chamado.', () => {
    fetchProducts('computador');
    fetch('url');
    expect(fetch).toHaveBeenCalled();
  });

  test('Testa se quando fetchProducts("computador") é executada, o fetch é chamado com o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador"', async () => {
    const product = 'computador';
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
    fetchProducts(product);
    const fetchComputador = await fetch(url);
    expect(url).toBe('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  test('Testa se quando fetchProducts("computador") é executada o retorno tem um estrutura igual ao comoputadorSearch', async () => {
    const product = 'computador';
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
    fetchProducts(product);
    const fetchComputador = await fetch(url);
    const computador = await fetchComputador.json();
    expect(computador).toEqual(computadorSearch);
  });

  test('Testa se ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: "You must provide an url"', async () => {
    try {
      const noURL = await fetch();
    } catch(error) {
      expect(error.message).toEqual('You must provide an url');
    }
  });
});