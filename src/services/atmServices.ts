
export const calcularCedulas = (valor: number): { [key: number]: number } => {
    const cedulas = [100, 50, 20, 10, 5, 2];

    if (valor <= 0) {
      throw new Error('Valor inválido. Insira um número inteiro positivo.');
    }

    const resultado: { [key: number]: number } = {};
  
    for (const cedula of cedulas) {
      resultado[cedula] = Math.floor(valor / cedula);
      valor %= cedula;
    }

    if (valor > 0) {
      throw new Error('Valor não pode ser atendido com as cédulas disponíveis.');
    }

    return resultado;
  };
  