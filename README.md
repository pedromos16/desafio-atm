# desafio-atm
Desafio Técnico Morada.ai: Caixa Eletrônico API

# Documentação do Projeto ATM API

## Descrição
Este projeto é uma API para simular a operação de um caixa eletrônico, calculando a quantidade mínima de cédulas necessárias para um saque com base em um conjunto pré-definido de denominações de cédulas.

A lógica é implementada em **TypeScript** e utiliza **Express.js** como framework para criar a API. Também inclui testes automatizados utilizando **Jest**.

---

## Requisitos

Antes de executar o projeto, você deve garantir que possui as seguintes ferramentas instaladas em seu sistema:

- **Node.js** (versão 16 ou superior)
- **npm** (gerenciador de pacotes do Node.js)

---

## Instalação

1. **Clone o repositório:**
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <PASTA_DO_REPOSITORIO>
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

---

## Estrutura geral do Projeto

```plaintext
/
├── src
│   ├── controllers
│   │   └── atmController.ts  # Controlador responsável pelas requisições
│   ├── routes
│   │   └── atmRoutes.ts      # Definição das rotas da API
│   ├── services
│   │   └── atmServices.ts   # Lógica para cálculo das cédulas
|   |   └── atmServices.test.ts  # Testes unitários para o serviço
│   └── app.ts               # Configuração do servidor Express
│   
├── package.json             # Configurações do projeto e dependências
├── tsconfig.json            # Configuração do TypeScript
└── README.md                # Documentação do projeto
```

---

## Como Executar o Projeto

1. **Compile o código TypeScript para JavaScript:**
   ```bash
   npm run dev
   ```

2. **Acesse a API:**
   O servidor estará rodando em `http://localhost:3000` por padrão mas verifique a configuração.

3. **Ferramenta para teste de API:**
   Utilize softwares como Insomnia ou Postman para enviar requisições.

---

## Rotas da API

### POST `/saque`

Realiza o cálculo da quantidade mínima de cédulas necessárias para o valor solicitado. Ex: POST = http://localhost:3000/api/saque

#### **Exemplo de Requisição:**
```json
{
  "valor": 370
}
```

#### **Exemplo de Resposta:**
```json
{
  "2": 0,
  "5": 0,
  "10": 0,
  "20": 1,
  "50": 1,
  "100": 3,
}
```

#### **Erros Possíveis:**
- **400 - Valor inválido:** Quando o valor não é um número inteiro positivo.
  ```json
  {
    "erro": "Valor inválido. Insira um número inteiro positivo."
  }
  ```
- **400 - Valor não atendido:** Quando o valor não pode ser atendido com as cédulas disponíveis.
  ```json
  {
    "erro": "Valor não pode ser atendido com as cédulas disponíveis."
  }
  ```

---

## Executando os Testes

O projeto inclui testes unitários para garantir a confiabilidade da lógica.

1. **Execute os testes:**
   ```bash
   npm test
   ```

2. **Saída esperada:**
   Você deve ver uma saída indicando que todos os testes passaram, como:
   ```plaintext
   PASS  src/services/atmServices.test.ts
     calcularCedulas
       ✓ Deve retornar a quantidade correta de cédulas para um valor válido
       ✓ Deve lançar um erro para valores negativos
       ✓ Deve retornar nenhuma cédula quando o valor for zero
   ```

---

## Desafios

Verificar se a lógica está correta e garantir a cobertura de todos os casos de teste.


---

## O Projeto

A lógica para o cálculo das cédulas utiliza o algoritmo guloso e uma arquitetura baseada em camadas.


---
