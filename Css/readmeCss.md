# Guia de Css

## Pasta 001 - Anatomia

- Seletor
- Declarações
- Propriedades
- Valor da Propriedade

## Pasta 002 - Box-model

- Elementos html são caixas.
- Caixas podem ficar ao lado da outra ou acima.
- Posicionamento, tamanho, espaçamento, bordas e cores.

## Pasta 003 - entendendo como adicionar Css

- Inline: dentro do elemento adicionando o style.
- interno: adicionando a tag style dentro dos metadados (head)
- Externo: Criando o arquivo com a extenção .css

## Cascading

Seu estilo é lido de cima para baixo

3 estilos é levado em consideração: 

- Origem do estilo (css: inline, interno e externo)
- Especificidade (seletor universal[0], elemento[1], class ou atributos[10], id[100], inline[1000])
- Importância

## at-rules 

Está relacionado ao comportamento do Css, começa com o sinal de @ e seguido do identificador e valor.

Exemplos comuns: 

- @import: incluir um css externo.
- @media: Regras condicionais para dispositivos. 
- @font-face: Para fontes externas.
- @keyframes: animação.

## Shorthand 

Shorthand deixa seu código mais legivel.

- Existem algumas propriedades que aceitam, confira a documentação.

## Funções 

- Nome seguido de abre e fecha parenteses
- Recebe argumentos

## DevTolls

- Ferramenta para desenvolvedores.
- Pode ser útil para testar algumas configurações.
- Podemos checar erros também.

## Cuidados com escrita

- Valores juntos ou separados.
- identação.

## Vendor prefixes

São coisas que permitem que browsers adiocionem features a fim de colocar em uso alguma novidade
que vemos no CSS.

-webkit: Chrome, Safari, iOS e Android.
-moz: Mozilla (Firefox)
-ms: Internet Explorer ou Edge
-o: Opera

Site para consultar: 

<a href="https://caniuse.com/">Can I Use</a>

# Nem tudo são pixels

O que vamos ver: 

- Unidade de medidas e valores

## Tipos númericos e unidades comuns

Tipos numéricos:

- integer: número inteiro como -10 ou 223
- number: número decimal como -2.4, 64 ou 0.234
- dimension: é um number com uma unidade junto: 90deg, 2s, 8px
- percentage: representa uma fração de outro número: 50%

Unidades comuns:

- length: é um dos mais usados no CSS e representa um valor de distância: px, em, vw
- angle: representa um ângulo: deg, rad, turn
- time: representa um tempo: s, ms
- resolution: representa resoluções para dispositivos: dpi

## Distâncias absolutas e relativas

Distâncias absolutas (length):

- São fixas e não alteram seu valor.
- cm, px, in.
- não é recomendado usar cm

Distâncias relativas: 

- São relativas a um outro valor, pode ser o elemento pai, ou root, ou o tamanho da tela.
- Benefício: Maior adaptação aos diferentes tipos de tela.
- em, rem, vw, vh.

## Porcentagens

- As porcentagens são valores bem flexíveis
- Em muitos casos é tratado da mesma maneira que as distâncias (length)
  Sempre será relativo a algum valor

## Position

Representa um conjunto de coordenadas:

- top, right, bottom, left e center
- Usado para alguns tipos de propriedades como o background-position
  Não confundir com a propriedade position

## Funções

Em programação, funções são reconhecidas por causar um reaproveitamento de código.
Exemplos de funções do CSS:

- rgb(): Red, Green, Blue (0-255).
- hsl(): Matiz, Saturação, Luminosidade.
- url(): Busca uma imagem.
- calc(): Vai realizar o calculo Ex: (50% - 20px).
- Dentro dos parêntesis são passados argumentos.

## Strings e identificadores

- Strings: texto envolto em aspas
- Identificadores: podemos ter nomes de cores como red, black, gold

# Box Model

A Box model é fundamental para fazer layouts para a web.
- Maior facilidade para aplicar css.

Possui:

- Tamanho (largura x altura - width x height)
- Conteúdo (content)
- Bordas (Border)
- Preenchimento interno (padding)
- Preenchimento externo (margin)

## Box-sizing

Como será calculado o tamanho total da caixa?

- Content-box ou border-box

## Display block e inline

Como as caixas irão se comportam em relação ás outras caixas
- Comportamento externo das caixas.

Block:

- Ocupa toda a linha, colocando o próximo elemento em baixo.
- O width e height é respeitado.
- padding, margin, border irão funcionar normalmente. 

inline:

- Os elementos ficam um ao lado do outro. 
- O width e height não funcionam. 
- Somente valores horizontais de margin, padding, border.

## Margin

- Espaço entre os elementos

## Padding 

- Espaço interno.

## Border e outline

border: 

As bordas da caixa
- Style: dotted, solid, dashed, double, groove, ridge, inset e outset.

border outline: 

- Não modifica o tamanho da caixa, pois não é parte do Box Model
- Poderá ser diferente de retangular
- Não permite ajuste individuais
- Mais usado pelo user agent para acessibilidade

# Cores

O que vamos ver: 
- Cores 
- Backgrounds

## Introdução

Usamos cores no css para alterar a cor do nosso documento;

Tipos: 
- Background-color (para caixas)
- color (para textos)
- border-color (para caixas)
- outros...

Valores:

- Palavra-chae (blue, transparent)
- hexadecimal (#990011)
- funções (rgb, rgba, hsl, hsla)

## Valores globais

Global values: 
(valores para a propriedade color)

- inheritr - Herda a cor do elemento anterior */
- initial  - Volta a sua cor inicial */
- unset    - Pega a cor do contexto */

## Background

- Define um fundo para seu elemento.
- Sua área de atuação é a caixa toda.
- Por padrão é transparent.