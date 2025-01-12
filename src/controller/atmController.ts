
import { Request, Response } from 'express';
import { calcularCedulas } from '../services/atmServices';

export const realizarSaque = (req: Request, res: Response): void => {
  const { valor } = req.body;

  /*
  if (!Number.isInteger(valor) || valor <= 0) {
    res.status(400).json({ erro: 'Valor inválido. Insira um número inteiro positivo.' });
    return;
  }
  */ 

  try {
    const resultado = calcularCedulas(valor);
    res.json(resultado);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ erro: error.message });
    } else {
      res.status(400).json({ erro: 'Erro desconhecido' });
    }
  }
  
};
