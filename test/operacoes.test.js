const {
  soma, subtracao, multiplicacao, divisao, potencia, raizQuadrada, restoDivisao,
  fatorial, mediaArray, somaArray, maximoArray, minimoArray, valorAbsoluto,
  arredondar, isPar, isImpar, calcularPorcentagem, aumentarPorcentagem,
  diminuirPorcentagem, inverterSinal, seno, cosseno, tangente, logaritmoNatural,
  logaritmoBase10, arredondarParaBaixo, arredondarParaCima, hipotenusa,
  grausParaRadianos, radianosParaGraus, mdc, mmc, isPrimo, fibonacci,
  produtoArray, clamp, isDivisivel, celsiusParaFahrenheit, fahrenheitParaCelsius,
  inverso, areaCirculo, areaRetangulo, perimetroRetangulo, isMaiorQue,
  isMenorQue, isEqual, medianaArray, dobro, triplo, metade
} = require('../src/operacoes');

describe('Suíte de Testes Fraca para 50 Operações Aritméticas', () => {
  // === Testes para o Bloco 1 (1-10) ===
  test('1. deve somar dois números positivos', () => { expect(soma(2, 3)).toBe(5); });
  test('2. deve subtrair dois números positivos', () => { expect(subtracao(5, 2)).toBe(3); });
  test('3. deve multiplicar dois números positivos', () => { expect(multiplicacao(3, 4)).toBe(12); });
  test('4. deve dividir e lançar erro para divisão por zero', () => {
    expect(divisao(10, 2)).toBe(5);
    expect(() => divisao(5, 0)).toThrow();
    expect(() => divisao(0, 0)).toThrow();
  });
  test('5. deve calcular a potência com expoente positivo', () => { expect(potencia(2, 3)).toBe(8); });
  test('deve lançar erro com mensagem correta ao tentar calcular raiz quadrada de número negativo', () => {
  expect(() => raizQuadrada(-4)).toThrow('Não é possível calcular a raiz quadrada de um número negativo.');
  });
  test('7. deve retornar o resto da divisão', () => { expect(restoDivisao(10, 3)).toBe(1); });
  test('8. deve calcular o fatorial de um número maior que 1', () => { expect(fatorial(4)).toBe(24); });
  test('deve lançar erro com mensagem correta ao calcular fatorial de número negativo', () => {
    expect(() => fatorial(-5)).toThrow('Fatorial não é definido para números negativos.');});
  test('9. deve calcular a média de um array com múltiplos elementos', () => { expect(mediaArray([10, 20, 30])).toBe(20); });
  test('10. deve somar um array com múltiplos elementos', () => { expect(somaArray([1, 2, 3])).toBe(6); });
  test('deve lançar erro com mensagem correta ao tentar dividir por zero', () => {
    expect(() => divisao(5, 0)).toThrow('Divisão por zero não é permitida.');
  });
  test('deve calcular corretamente a raiz quadrada de zero', () => {
    expect(raizQuadrada(0)).toBe(0);
  });
  test('deve retornar 1 quando o número for 0', () => {
    expect(fatorial(0)).toBe(1);
  });
  test('deve retornar 1 quando o número for 1', () => {
    expect(fatorial(1)).toBe(1);
  });
  test('deve calcular corretamente o fatorial de 2', () => {
    expect(fatorial(2)).toBe(2);
  });
  test('não deve entrar no loop quando n for 1', () => {
    const spy = jest.spyOn(Math, 'sqrt'); 
    expect(fatorial(1)).toBe(1);
    expect(spy).not.toHaveBeenCalled(); 
    spy.mockRestore();
  });
  test('deve calcular corretamente o fatorial de 3 para garantir que o operador lógico funcione', () => {
    expect(fatorial(3)).toBe(6);
  });





  // === Testes para o Bloco 2 (11-20) ===
  test('11. deve encontrar o valor máximo em um array', () => { expect(maximoArray([1, 50, 10])).toBe(50); });
  test('12. deve encontrar o valor mínimo em um array', () => { expect(minimoArray([10, 2, 100])).toBe(2); });
  test('13. deve retornar o valor absoluto de um número negativo', () => { expect(valorAbsoluto(-5)).toBe(5); });
  test('14. deve arredondar um número para cima', () => { expect(arredondar(9.8)).toBe(10); });
  test('15. deve retornar true para um número par', () => { expect(isPar(100)).toBe(true); });
  test('16. deve retornar true para um número ímpar', () => { expect(isImpar(7)).toBe(true); });
  test('17. deve calcular uma porcentagem simples', () => { expect(calcularPorcentagem(50, 200)).toBe(100); });
  test('18. deve aumentar um valor em uma porcentagem', () => { expect(aumentarPorcentagem(100, 10)).toBeCloseTo(110); });
  test('19. deve diminuir um valor em uma porcentagem', () => { expect(diminuirPorcentagem(100, 10)).toBeCloseTo(90); });
  test('20. deve inverter o sinal de um número positivo', () => { expect(inverterSinal(42)).toBe(-42); });
  test('deve lançar erro com mensagem correta ao tentar encontrar o máximo de um array vazio', () => {
    expect(() => maximoArray([])).toThrow('Array vazio не possui valor máximo.');});
  test('deve lançar erro com mensagem correta ao tentar encontrar o mínimo de um array vazio', () => {
    expect(() => minimoArray([])).toThrow('Array vazio не possui valor mínimo.');});


  
  // === Testes para o Bloco 3 (21-30) ===
  test('21. deve calcular o seno de 0', () => { expect(seno(0)).toBe(0); });
  test('22. deve calcular o cosseno de 0', () => { expect(cosseno(0)).toBe(1); });
  test('23. deve calcular a tangente de 0', () => { expect(tangente(0)).toBe(0); });
  test('24. deve calcular o logaritmo natural de Euler', () => { expect(logaritmoNatural(Math.E)).toBe(1); });
  test('25. deve calcular o logaritmo na base 10', () => { expect(logaritmoBase10(100)).toBe(2); });
  test('26. deve arredondar para baixo', () => { expect(arredondarParaBaixo(5.9)).toBe(5); });
  test('27. deve arredondar para cima', () => { expect(arredondarParaCima(5.1)).toBe(6); });
  test('28. deve calcular a hipotenusa de um triângulo retângulo', () => { expect(hipotenusa(3, 4)).toBe(5); });
  test('29. deve converter graus para radianos', () => { expect(grausParaRadianos(180)).toBeCloseTo(Math.PI); });
  test('30. deve converter radianos para graus', () => { expect(radianosParaGraus(Math.PI)).toBeCloseTo(180); });

  // === Testes para o Bloco 4 (31-40) ===
  test('31. deve calcular o MDC de dois números', () => { expect(mdc(10, 5)).toBe(5); });
  test('32. deve calcular o MMC de dois números', () => { expect(mmc(10, 5)).toBe(10); });
  test('33. deve verificar que um número é primo', () => { expect(isPrimo(7)).toBe(true); });
  test('34. deve calcular o 10º termo de Fibonacci', () => { expect(fibonacci(10)).toBe(55); });
  test('35. deve calcular o produto de um array', () => { expect(produtoArray([2, 3, 4])).toBe(24); });
  test('36. deve manter um valor dentro de um intervalo (clamp)', () => { expect(clamp(5, 0, 10)).toBe(5); });
  test('37. deve verificar se um número é divisível por outro', () => { expect(isDivisivel(10, 2)).toBe(true); });
  test('38. deve converter Celsius para Fahrenheit', () => { expect(celsiusParaFahrenheit(0)).toBe(32); });
  test('39. deve converter Fahrenheit para Celsius', () => { expect(fahrenheitParaCelsius(32)).toBe(0); });
  test('40. deve calcular o inverso de um número', () => { expect(inverso(4)).toBe(0.25); });
  test('deve retornar false para números menores ou iguais a 1', () => {
    expect(isPrimo(0)).toBe(false);
    expect(isPrimo(1)).toBe(false);
    expect(isPrimo(-3)).toBe(false);
  });
  test('deve retornar false para números compostos', () => {
    expect(isPrimo(4)).toBe(false);
    expect(isPrimo(9)).toBe(false);
    expect(isPrimo(15)).toBe(false);
  });
  test('deve retornar true para números primos', () => {
    expect(isPrimo(2)).toBe(true);
    expect(isPrimo(3)).toBe(true);
    expect(isPrimo(5)).toBe(true);
    expect(isPrimo(11)).toBe(true);
  });
  test('deve lançar erro com mensagem correta ao tentar inverter o número zero', () => {
    expect(() => inverso(0)).toThrow('Não é possível inverter o número zero.');});
  test('deve retornar o valor máximo quando o valor for maior que o limite superior', () => {
    expect(clamp(15, 0, 10)).toBe(10);});
  test('deve retornar o valor máximo quando o valor for exatamente igual ao limite superior', () => {
    expect(clamp(10, 0, 10)).toBe(10);});
  test('deve retornar o valor mínimo quando o valor for menor que o limite inferior', () => {
    expect(clamp(-5, 0, 10)).toBe(0);});
  test('deve retornar o valor mínimo quando o valor for exatamente igual ao limite inferior', () => {
    expect(clamp(0, 0, 10)).toBe(0);});
  test('deve retornar 1 quando o array estiver vazio', () => {
    expect(produtoArray([])).toBe(1);});
  test('deve retornar o próprio valor quando estiver dentro dos limites', () => {
    expect(clamp(5, 0, 10)).toBe(5);});
  test('deve retornar o próprio número quando o array tiver apenas um elemento', () => {
    expect(produtoArray([7])).toBe(7);});
  test('deve retornar o próprio valor quando for igual ao limite superior e inferior simultaneamente', () => {
    expect(clamp(5, 5, 5)).toBe(5);});
  test('não deve retornar o valor mínimo quando o valor for igual ao mínimo mas menor que o máximo', () => {
    expect(clamp(0, 0, 5)).toBe(0); 
    expect(clamp(1, 0, 5)).toBe(1); });
  test('deve retornar o próprio valor quando for igual ao limite inferior, mas ainda dentro do intervalo válido', () => {
    expect(clamp(5, 5, 10)).toBe(5);});
  test('deve retornar o próprio valor quando estiver ligeiramente acima do limite inferior', () => {
    expect(clamp(0.0001, 0, 10)).toBe(0.0001);});
  test('não deve retornar 1 quando o array tiver mais de um elemento', () => {
    expect(produtoArray([2, 2])).toBe(4);
  });
  test('deve retornar 1 apenas quando o array estiver vazio', () => {
    expect(produtoArray([])).toBe(1);          
    expect(produtoArray([5])).toBe(5);         
    expect(produtoArray([2, 3])).toBe(6);
  });
  describe('produtoArray', () => {
  test('deve retornar 1 quando o array estiver vazio', () => {
    expect(produtoArray([])).toBe(1);
  });
  test('deve retornar o próprio número quando o array tiver apenas um elemento diferente de 1', () => {
    expect(produtoArray([5])).toBe(5);
  });
  test('deve retornar o mesmo valor quando o único elemento for 1', () => {
    expect(produtoArray([1])).toBe(1);
  });
  test('deve calcular corretamente o produto de múltiplos elementos positivos', () => {
    expect(produtoArray([2, 3, 4])).toBe(24);
  });
  test('deve calcular corretamente o produto incluindo números negativos', () => {
    expect(produtoArray([-2, 3])).toBe(-6);
    expect(produtoArray([-2, -3])).toBe(6);
  });
  test('deve retornar 0 quando qualquer elemento for 0', () => {
    expect(produtoArray([2, 0, 5])).toBe(0);
  });
  test('não deve retornar 1 quando o array tiver mais de um elemento', () => {
    expect(produtoArray([2, 3])).not.toBe(1);
    expect(produtoArray([1, 1])).toBe(1); 
  });
  test('deve lidar com números decimais corretamente', () => {
    expect(produtoArray([1.5, 2])).toBe(3);
  });
  test('deve lidar com valores grandes sem falhar', () => {
    expect(produtoArray([10, 20, 30])).toBe(6000);
  });
});
  test('deve retornar 1 apenas se o array estiver vazio — verificação direta da condição', () => {
    expect(produtoArray([])).toBe(1);

    expect(produtoArray([0])).toBe(0);
    expect(produtoArray([0, 0])).toBe(0);
    expect(produtoArray([1, 0])).toBe(0);
  });
  
describe('isImpar', () => {
  test('deve retornar true para números ímpares positivos', () => {
    expect(isImpar(3)).toBe(true);
    expect(isImpar(101)).toBe(true);
  });

  test('deve retornar false para números pares', () => {
    expect(isImpar(2)).toBe(false);
    expect(isImpar(100)).toBe(false);
  });

  test('deve retornar true para números ímpares negativos', () => {
    expect(isImpar(-3)).toBe(true);
  });

  test('deve retornar false para zero', () => {
    expect(isImpar(0)).toBe(false);
  });
});
describe('isPar', () => {
  test('deve retornar true para números pares positivos', () => {
    expect(isPar(2)).toBe(true);
    expect(isPar(100)).toBe(true);
  });

  test('deve retornar false para números ímpares positivos', () => {
    expect(isPar(3)).toBe(false);
    expect(isPar(101)).toBe(false);
  });

  test('deve retornar true para zero', () => {
    expect(isPar(0)).toBe(true);
  });

  test('deve retornar true para números pares negativos', () => {
    expect(isPar(-4)).toBe(true);
  });

  test('deve retornar false para números ímpares negativos', () => {
    expect(isPar(-3)).toBe(false);
  });
});
describe('mediaArray', () => {
  test('deve retornar 0 quando o array estiver vazio', () => {
    expect(mediaArray([])).toBe(0);
  });

  test('deve calcular corretamente a média de múltiplos elementos positivos', () => {
    expect(mediaArray([2, 4, 6])).toBe(4);
  });

  test('deve calcular corretamente a média com números negativos', () => {
    expect(mediaArray([-2, 4, -6])).toBeCloseTo((-2 + 4 - 6) / 3);
  });

  test('deve calcular corretamente a média de um único elemento', () => {
    expect(mediaArray([10])).toBe(10);
  });

  test('não deve retornar 0 quando o array não estiver vazio', () => {
    expect(mediaArray([5, 5])).not.toBe(0);
  });
});
describe('clamp - casos extremos para operadores de igualdade', () => {
  test('não deve retornar o valor mínimo se o valor for igual ao mínimo e maior que o mínimo permitido em precisão decimal', () => {
    // força diferença entre < e <=
    expect(clamp(0.0000000001, 0, 10)).toBe(0.0000000001);
  });

  test('não deve retornar o valor máximo se o valor for igual ao máximo mas menor com precisão decimal', () => {
    expect(clamp(9.9999999999, 0, 10)).toBe(9.9999999999);
  });
});

  













  // === Testes para o Bloco 5 (41-50) ===
  test('41. deve calcular a área de um círculo', () => { expect(areaCirculo(10)).toBeCloseTo(314.159); });
  test('42. deve calcular a área de um retângulo', () => { expect(areaRetangulo(5, 4)).toBe(20); });
  test('43. deve calcular o perímetro de um retângulo', () => { expect(perimetroRetangulo(5, 4)).toBe(18); });
  test('44. deve verificar se um número é maior que outro', () => { expect(isMaiorQue(10, 5)).toBe(true); });
  test('45. deve verificar se um número é menor que outro', () => { expect(isMenorQue(5, 10)).toBe(true); });
  test('46. deve verificar se dois números são iguais', () => { expect(isEqual(7, 7)).toBe(true); });
  test('47. deve calcular a mediana de um array ímpar e ordenado', () => { expect(medianaArray([1, 2, 3, 4, 5])).toBe(3); });
  test('48. deve calcular o dobro de um número', () => { expect(dobro(10)).toBe(20); });
  test('49. deve calcular o triplo de um número', () => { expect(triplo(10)).toBe(30); });
  test('50. deve calcular a metade de um número', () => { expect(metade(20)).toBe(10); });
  test('deve lançar erro com mensagem correta ao tentar calcular a mediana de um array vazio', () => {
    expect(() => medianaArray([])).toThrow('Array vazio не possui mediana.');});
  test('deve calcular corretamente a mediana de um array com quantidade par de elementos', () => {
    expect(medianaArray([1, 2, 3, 4])).toBe(2.5);});
  test('deve calcular corretamente a mediana de um array com quantidade ímpar de elementos', () => {
    expect(medianaArray([1, 2, 3, 4, 5])).toBe(3);});
  test('deve calcular corretamente a mediana de um array fora de ordem', () => {
    expect(medianaArray([5, 1, 3, 2, 4])).toBe(3);});
  test('deve calcular corretamente a mediana quando o array contém valores repetidos e fora de ordem', () => {
    expect(medianaArray([10, 2, 2, 8, 3])).toBe(3);});
  test('deve retornar false quando os números forem diferentes', () => {
    expect(isEqual(5, 10)).toBe(false);});
    test('deve retornar false quando o primeiro número for maior', () => {
      expect(isMenorQue(10, 5)).toBe(false);});
    test('deve retornar false quando os números forem iguais', () => {
      expect(isMenorQue(5, 5)).toBe(false);});
    test('deve retornar false quando o primeiro número for menor', () => {
      expect(isMaiorQue(5, 10)).toBe(false);});
  test('deve retornar false quando os números forem iguais', () => {
    expect(isMaiorQue(5, 5)).toBe(false);});
  test('deve converter corretamente 212°F para 100°C', () => {
    expect(fahrenheitParaCelsius(212)).toBeCloseTo(100);});
  test('deve converter corretamente -40°F para -40°C', () => {
    expect(fahrenheitParaCelsius(-40)).toBeCloseTo(-40);});
  test('deve converter corretamente 100°C para 212°F', () => {
    expect(celsiusParaFahrenheit(100)).toBeCloseTo(212);});
  test('deve converter corretamente -40°C para -40°F', () => {
    expect(celsiusParaFahrenheit(-40)).toBeCloseTo(-40);});
  test('deve retornar false quando o número não for divisível', () => {
    expect(isDivisivel(10, 3)).toBe(false);});
  test('deve lançar erro ou retornar false quando o divisor for zero', () => {
    expect(isDivisivel(10, 0)).toBe(false);});
});
