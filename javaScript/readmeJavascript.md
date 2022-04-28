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

## Variaveis - 28/04/2022

### Scope e var

- Escopo determina a visibilidade de alguma variavel no js.

- var tem o escopo global e, também local.

#### Block statement(declaração de bloco)

- O bloco criará um novo escopo

### Tipos dinâmicos

O js é uma linguagem fracamente tipada e dinâmica
- Variáveis não precisam ter um tipo previamente definido.
- Podemos mudar o conteúdo da variável
- Com excessão do const que vai permanecer sempre com a mesma tipagem.

### Conhecendo as variáveis

- Nome simbólicos para receber algum valor
- Atalhos de código.
- Identificadores

3 Palavras reservadas para criar uma variável:
- var: escopo global.
- let: escopo local.
- const: escopo local e sua tipagem não pode ser mudada.

## Nomeando variáveis

- JS Aceita a cadeia de caracteres unicode.

Posso:

- Iniciar com esses caracteres especiais: $ _
- Iniciar com letras
- Colocar acentos
- Letras maísculas e minúsculas fazm diferença.

Não posso:

- Iniciar com números
- Colocar espaços vazios no nome

Ideal: 

- Criar nomes que fazem sentido
- Que explique o que a variável é ou faz
- camelCase
- snake_case
- Escrever em inglês. 