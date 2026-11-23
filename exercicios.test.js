
// exercicios.test.js - Suíte de Testes Unitários

const {
  calcularMedia,
  verificarAprovacao,
  classificarFaixaEtaria,
  converterKmParaMilhas,
  gerarEmailCorporativo,
  adicionarItemCarrinho,
  calcularSalarioLiquido,
  criarProduto,
  ehTrianguloValido,
  removerElemento
} = require('./exercicios');

describe('Suíte de Testes Unitários - 10 Regras de Negócio', () => {

  // Teste 1: calcularMedia
  test('1. calcularMedia: deve calcular médias e validar intervalo das notas', () => {
    expect(calcularMedia(7, 8, 9)).toBe(8);

    expect(calcularMedia(7.5, 8.0, 9.0)).toBeCloseTo(8.17, 2);

    expect(() => calcularMedia(-1, 8, 9))
      .toThrow('Nota inválida: deve estar entre 0 e 10');

    expect(() => calcularMedia(7, 11, 9))
      .toThrow('Nota inválida: deve estar entre 0 e 10');
  });

  // Teste 2: verificarAprovacao
  test('2. verificarAprovacao: deve validar nota e frequência mínima', () => {
    expect(verificarAprovacao(7.0, 75)).toBe(true);

    expect(verificarAprovacao(8.5, 80)).toBe(true);

    expect(verificarAprovacao(6.9, 90)).toBe(false);

    expect(verificarAprovacao(9.0, 74)).toBe(false);
  });

  // Teste 3: classificarFaixaEtaria
  test('3. classificarFaixaEtaria: deve classificar idades e barrar idade negativa', () => {
    expect(classificarFaixaEtaria(10)).toBe('Criança');

    expect(classificarFaixaEtaria(15)).toBe('Adolescente');

    expect(classificarFaixaEtaria(25)).toBe('Adulto');

    expect(classificarFaixaEtaria(65)).toBe('Idoso');

    expect(() => classificarFaixaEtaria(-5))
      .toThrow('Idade não pode ser negativa');
  });

  // Teste 4: converterKmParaMilhas
  test('4. converterKmParaMilhas: deve converter quilômetros e validar distância', () => {
    expect(converterKmParaMilhas(10)).toBeCloseTo(6.21, 2);

    expect(converterKmParaMilhas(0)).toBe(0);

    expect(() => converterKmParaMilhas(-10))
      .toThrow('Distância não pode ser negativa');
  });

  // Teste 5: gerarEmailCorporativo
  test('5. gerarEmailCorporativo: deve normalizar os dados do e-mail', () => {
    expect(
      gerarEmailCorporativo('Lucas', 'Silva', 'empresa.com')
    ).toBe('lucas.silva@empresa.com');

    expect(
      gerarEmailCorporativo('  Ana ', ' Souza  ', 'TECH.IO')
    ).toBe('ana.souza@tech.io');
  });

  // Teste 6: adicionarItemCarrinho
  test('6. adicionarItemCarrinho: deve adicionar item preservando imutabilidade', () => {
    const carrinhoInicial = ['Monitor', 'Mouse'];

    const resultado = adicionarItemCarrinho(carrinhoInicial, 'Teclado');

    expect(resultado).toEqual(['Monitor', 'Mouse', 'Teclado']);

    expect(resultado).toHaveLength(3);

    expect(carrinhoInicial).toHaveLength(2);

    expect(carrinhoInicial).toEqual(['Monitor', 'Mouse']);
  });

  // Teste 7: calcularSalarioLiquido
  test('7. calcularSalarioLiquido: deve calcular desconto e validar valores', () => {
    expect(calcularSalarioLiquido(3000, 10)).toBe(2700);

    expect(calcularSalarioLiquido(5000, 0)).toBe(5000);

    expect(() => calcularSalarioLiquido(0, 10))
      .toThrow('Valores de salário ou desconto inválidos');

    expect(() => calcularSalarioLiquido(3000, -5))
      .toThrow('Valores de salário ou desconto inválidos');

    expect(() => calcularSalarioLiquido(3000, 110))
      .toThrow('Valores de salário ou desconto inválidos');
  });

  // Teste 8: criarProduto
  test('8. criarProduto: deve criar produto e barrar preço inválido', () => {
    const produtoEsperado = {
      id: 1,
      nome: 'Monitor',
      preco: 899.90,
      categoria: 'Informática',
      emEstoque: true
    };

    expect(
      criarProduto(1, 'Monitor', 899.90, 'Informática')
    ).toEqual(produtoEsperado);

    expect(() => criarProduto(2, 'Mouse', 0, 'Informática'))
      .toThrow('Preço deve ser maior que zero');

    expect(() => criarProduto(3, 'Teclado', -50, 'Informática'))
      .toThrow('Preço deve ser maior que zero');
  });

  // Teste 9: ehTrianguloValido
  test('9. ehTrianguloValido: deve validar a existência de um triângulo', () => {
    expect(ehTrianguloValido(3, 4, 5)).toBe(true);

    expect(ehTrianguloValido(1, 2, 10)).toBe(false);

    expect(ehTrianguloValido(0, 4, 5)).toBe(false);

    expect(ehTrianguloValido(-1, 4, 5)).toBe(false);
  });

  // Teste 10: removerElemento
  test('10. removerElemento: deve remover item preservando o array original', () => {
    const listaOriginal = ['banana', 'maca', 'uva'];

    const resultado = removerElemento(listaOriginal, 'maca');

    expect(resultado).toEqual(['banana', 'uva']);

    expect(removerElemento([1, 2, 3], 99)).toEqual([1, 2, 3]);

    expect(listaOriginal).toHaveLength(3);

    expect(listaOriginal).toEqual(['banana', 'maca', 'uva']);
  });

});