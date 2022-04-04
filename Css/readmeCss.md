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

# Background

- Define um fundo para seu elemento.
- Sua área de atuação é a caixa toda.
- Por padrão é transparent.

## background-color:

- define uma cor de fundo para seu elemento, preenche todo o bloco

[background-color: blue;]

## background-image:

- Você pode definir alguns valores dentro dele, como por exemplo colocar uma imagem ou também colocar um linear-gradient.

[background-image: url ('url aqui')]

## background-no-repeat:

- Serve para não deixar a imagem se repetir.

## background-position:
- Podemos colocar alguns valores, como por exemplo: center, left, right, top e bottom.
- Com a propriedade background-position podemos mudar a posição da imagem do background.

[background-position: center left;]

## background-size:

- Podemos colocar alguns valores aqui, por exemplo %, px, em e cover.
- Para mudar o tamanho da imagem do background usamos a propriedade background-size.

## Background-origin-clip:

- A propriedade background-origin é quem define o ponto de origem de uma imagem específica.
- O background-clip define se a cor ou imagem do background iniciam debaixo de sua área de borda, preenchimento ou conteúdo.

# Posicionamento

Layouts: 

Nessa aula vamos ver alguns dos métodos usados para posicionar os elementos na tela.

Tables
Floats e clear
Frameworks e Grid Systems
Flexbox
Grid

## Position

Controla onde, na página, o elemento irá ficar, alterando o fluxo normal dos elementos.

- Name: position
- Value: static | relative | absolute | fixed
- Lembrando que o fluxo normal dos elementos é ficar um abaixo do outro, a não ser no caso de elementos inline, que ficam um ao lado do outro.

### static: 

- O valor que vem por padrão.

### Relative: 

- está posicionado em relação à sua posição normal.

### absolute: 

- absolute coloca um elemento em relação à posição de seu pai e altera o layout ao redor dele.

### fixed: 

- Quando aplicado o position fixed é como se criasse um elemento flutuante que fica fixo na página, independente do scrolling feito.

### Element Stacking: 

- É o empilhamento de elementos. Podemos usar o z-index para determinar a ordem da posição do elemento. Quanto maior o z-index, mais "acima" vai aparecer o elemento.

## Flexbox

- Nos permite posicionar os elementos dentro da caixa
- Controle em uma dimensão (horizontal ou vertical)
- Alinhamento, direcionamento, ordenar e tamanhos

### Flex-direction

-Qual a direção do flex: horizontal ou vertical
- row | column

### Alinhamento

- justify-content
- align-items

## Grid

- Posicionamento dos elementos dentro da caixa.
- Posicionamento horizontal e vertical ao mesmo tempo.
- Pode ser flexivel ou fixo.
- Cria espaços para os elementos filhos habitarem.

### grid-template-areas

Vai definir as linhas e colunas da nossa caixa, deve-se aplicar ao conteiner pai. 

"" - as aspas são as linhas
"1 2" dentro das aspas definimos as colunas

### grid-template-rows e grid-template-columns

- Para definir tamanhos para nossa linhas e colunas precisamos declarar a propriedade grid-template-rows para linhas e grid-template-columns para colunas.

Exemplo: 

grid-template-rows: 10px 10px 10px;  (sendo 3 linhas)
grid-template-columns: 10px 20px; (sendo duas colunas)

# Textos 

- fontes, font-weight, font-family, entre outros.
- cores.

## Font-proprities

A tipografia transmite uma mensagem, por exemplo, quando queremos dar uma ênfase no texto nós podemos escrever o mesmo em negrito.

- Nós podemos transmitir uma mensagem diferente dependendo do estilo que escrevemos o texto.

Algumas das propriedades de fonts do CSS que podem nos ajudar a transmitir uma mensagem através dos textos da página são:

- font-family
- font-weight
- font-style
- font-size

### Font-family

- Tipo de fonte de um elemento
- Lista de fontes e ordem de prioridade
- inclui fallback font

### Font-weight

- Peso da fonte
- Valores: normal | bold | bolder | lighter | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
- Dependendo da família da fonte não conseguimos utilizar todos os pesos de fonte

### Font-style

- Guarda alguns valores, dentre eles o italic. 

### Font Variant

- Faz variações na apresentação da fonte (font-variant: small-caps;)

### Font Stretch

- Alargamento ou encolhimento da fonte
- Aceita palavras-chaves como: expanded, condensed, normal
- Aceita porcentagens de 50% a 200%
- Essa propriedade não vai funcionar em todas as fontes

### Letter spacing e Word spacing

- letter-spacing: define o espaço entre as letras (letter-spacing: 5px;)
- word-spacing: define o espaço entre as palavras (word-spacing: 5px);

### Line-height e text-transform

line-height: 
- Define os espaços entre linhas
- Pode ser com unidades ou sem unidades de medida
- Valores comuns: 1.5 ou 2

Text transform:
- Transformação do texto
- Valores podem ser: none | capitalize | uppercase | lowercase | full-width | full-size-kana.