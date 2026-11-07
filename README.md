# Classificador de Nível de Herói

Projeto desenvolvido como desafio prático da [DIO](https://www.dio.me/). O programa recebe o nome e a quantidade de experiência (XP) de um herói e informa seu nível.

## Tecnologias e conceitos

- JavaScript
- Node.js
- Variáveis e constantes
- Operadores
- Estruturas condicionais (`if`, `else`)
- Laço de repetição (`while`)
- Funções
- Entrada de dados pelo terminal

## Regras de classificação

| XP | Nível |
|---:|---|
| Até 1.000 | Ferro |
| 1.001 a 2.000 | Bronze |
| 2.001 a 5.000 | Prata |
| 5.001 a 7.000 | Ouro |
| 7.001 a 8.000 | Platina |
| 8.001 a 9.000 | Ascendente |
| 9.001 a 10.000 | Imortal |
| Acima de 10.000 | Radiante |

> A primeira faixa considera XP menor ou igual a 1.000 para que todos os valores válidos tenham uma classificação.

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado.
- Terminal ou editor de código, como o Visual Studio Code.

## Como executar

1. Clone este repositório ou baixe os arquivos.
2. Abra o terminal na pasta do projeto.
3. Execute:

```bash
node index.js
```

4. Informe o nome do herói e sua quantidade de XP.
5. Responda `s` para classificar outro herói ou `n` para encerrar.

## Exemplo de execução

```text
====================================
       CLASSIFICADOR DE HEROI
====================================

Digite o nome do heroi: Alex
Digite a quantidade de XP: 8500

------------------------------------
O Heroi de nome Alex esta no nivel de Ascendente
------------------------------------

Deseja classificar outro heroi? (s/n):
```

## Validações

O programa solicita novamente os dados quando o nome está vazio, o XP não é numérico ou o valor informado é negativo.

## Estrutura do projeto

```text
classificador-nivel-heroi/
├── index.js
├── README.md
└── .gitignore
```

## Objetivo

Praticar fundamentos de lógica de programação por meio de um programa simples, interativo e executado no terminal.

---

Desafio proposto pela DIO — Classificador de Nível de Herói.
