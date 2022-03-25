# Guia Da Pasta Css

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