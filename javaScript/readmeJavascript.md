# Guia estelar de javascript - 22/04/22

O que vamos ver?

- Para que ele serve
- Primeiros passos
- Dados e váriaveis
- Condicionais
- Pratica
- Funções, manipulação de dados.
- Expressões.

## Introdução

### JavaScript core:

Linguagem de programação que roda no navegador do usuário (front-end)
- Se você clicar em um algum botão da página e aparecer uma janela. Isso é javascript. 
- Alteração do site ou aplicativo conforme a interação do usuário.
- Roda também no computador (back-end).

#### O que podemos fazer?

- Podemos  criar aplicações web, mobile (react native), desktop (electron)
- Empresas famosas usam (facebook, google, uber, netflix, tiktok).
- Linguagem obrigatoria para quem programa o front-end.

## Primeiros passos 

### Sintaxe

Importância da sintaxe: 

- Toda linguagem tem 
- Uma boa comunicaçãp necessita de uma boa sintaxe

exemplo: 

console.log ("Bem-vindo ao start") - correto 
consolelog("Bem-vindo ao start") - Errado (sem o ponto no .log)

### Comentarios no javascript

Comentários em linha - //
Comentários em bloco - /* (inicio) */ (final)

## Tipos de dados - 23/04/22

### Introdução:

Gramática: 
- elementos da linguagem e suas combinações.
- A arte de falar e escrever corretamente. 

Vocabulário:
- Conjunto de termos e expressões.
- Agripamento de palavras.

Objetivo - foco:

- Vamos aprender os tipos de dados mais utilizados na linguagem.
- Conceitos e Escrita. 

### String:

- O tipo de dados String consiste em uma cadeia de caracteres, ou seja, textos.

Para denotar string no JavaScript são usados: 
- aspas duplas: ""
- aspas simples: ''  
- template literals ou template strings: ``. (crâses - você pode usar em bloco, pois é multilinha e não apresentará erro de escrita.)

### Number: 

Números:

- 33 (inteiros)
- 12.5 (reais)
- NaN (Not a Number)
- Infinity (infinito)

### Boolean: 

- Verdadeiro ou Falso.
- true or false.

### undefined vs null - 24/04/22

undefined: 
- indefinido

null: 
- nulo
- objeto que não possui nada dentro.
- diferente de indefinido.

### object

- Objeto
- Propriedades/ atributos
- funcionalidade/ metodos

{Propriedade: "valor"}

### array

- Uma lista
- Agrupamento de dado

### Conclusão

Conforme o ECMAScript standard temos 9 tipos de dados:

Tipos de dados: 

- Primitivo / valor primitivo
- Estrutural
- Primitivo estrutural

Primitivos: 

- String, Number, Boolean, Undefined, Symbol, BigInt

Estruturais:

- Object:
    - array
    - map
    - set
    - date
- Function

Primitivo estrutural:

- Null