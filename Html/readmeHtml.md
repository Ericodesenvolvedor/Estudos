# Estudos html

## Trabalhando com introdução ao html e elementos

### pasta 001
- Titulos e parágrafos

### pasta 002
Listas: 
- ul: Lista não ordenada. 
- ol: Lista ordenada.
- dl: Lista de definição.

### pasta 003
Citação: 
- blockquote
- cite
- q

### pasta 004 
abbr - abreviações.

### pasta 005
- address : contatos. 

### pasta 006
- code: para um pequeno trecho de código
- pre: para um bloco de código

### pasta 007
elementos genericos:
- div: para blocos. 
- span: para inline. 

## Trabalhando com links

### pasta 008
hiperlinks:

- tag a
- atributos: href, mailto, tel.
- target: _self, _blank.

## Trabalhando com tabelas

### pasta 009
- Trabalhando com tabelas simples.
- Mesclando tabelas.
- Adicionando acessibilidade (caption, thead, tbody e tfoot).
- Adicionando scopo para tabelas.

## Trabalhando com metadados (head)

- Head 
- Meta
- Favicon
- Meta SEO (author, description)
- Meta Social

# Posso ver e ouvir o HTML

O que vamos ver: 

- Aprender a utilizar audio e video no html.
- Como trazer conteúdos e mídias de outros sites.
- Utilizar imagens de alta qualidade.

## Video

- Tag video e atributo src
- source atributo type (video/mp4)
- autoplay: vai fazer o video entrar automaticamente sem clicar no play.
- preload: vai fazer com que o video já seja baixado automaticamente para quando o úsuario clicar no play, não ter que ficar esperando carregar.
- poster: Esse vai fazer com que tenhamos uma capa no nosso video.

## Audio 

- É bem parecido com a tag de video, passa básicamente os mesmo atributos.

## Iframe

- Vai trazer conteúdos de fora sem consumir nossos dados
- title: usar para acessibilidade. 

## Imagens
- Tag img

Atributos: 

- tittle: O tittle vai dar um titulo para nossa imagem, então quando o mouse passar em cima e parar, vai ser mostrado um titulo.
- alt: ajuda bastante na acessibilidade, o alt vai aparecer quando a imagem não conseguir ser exibida.
- width e height: vai modificar a largura e altura da nossa imagem.

## Figure

Figure é uma tag semântica par adicionarmos nossas imagens. Junto a ela pode vir um caption.

## Introdução svg

A tag svg é uma marcação, estilo html, mas não é para textos e sim para fazer imagens.

Beneficios:
- Mais leve.
- Mais detalhada.
- Possui acessibilidade e SEO.
- Pode ser editada via Css.

Desvantagens: 
- Quanto mais detalhada, maior a dificuldade para o navegador.
- Navegadores mais antigos não possuem suporte.
- Pode ser mais complexo de se trabalhar. 

# Form - estruturas

Objetivos: 

- Como funciona um formulario.
- Como utilizar diversos dados de entrada.

## O que são formularios?

- Capturar dados de entrada (input)
- Interação
- Controle

## Atributos dentro da tag form:

- action: para onde os seus dados vão ser enviados
- method: post e get. 

# Tags dentro do formulario:

## fieldset

- Agrupamento de campos
- Semântico
- acessibilidade

atributos especiais: 

- disabled: desabilita todos os campos.
- form: o id de um formulario ao qual esse fieldset pertence não precisa estar dentro do formulario. 
- name: nome do grupo

## legend

- nome do agrupamento
- primeiro elemento dentro do fieldset.

## label 

- Associa e identifica uma ou mais tags de entrada de dados.
- acessibilidade
- Você poderá clicar para mudar o foca da entrada de dados

atributos: 

for: 
- Para fazer conexão entre este  label e a tag de entrada de dados
- É feita via id do input
- Só funciona com elementos especificos: button, input, meter, output, progress, select, textarea.

## button

- Representa um botão
- Usado para enviar formulários
- É estilizado pelo user agent

atributos comuns: 

- type: submit, reset, button.
- autofocus
- disabled
- name
- value
- form

## datalist

- Lista de valores como sugestão a umaa tag input
- Valores sugestivos e não obrigatórios
- Usuários poderão selecionar um dos valores, ou colocar um valor diferente da sugestão.

### list

- Recebe com valor o id de um datalist residente no mesmo documento

## textarea

- mais de uma linha
- útil para textos grandes

atributos: 

- id
- name
- rows e cols: define quantas linhas/colunas terão.
- maxlength e minlength
- wrap

## select e option

select: Controle que fornece um menu de opções
option: Contém as opções a serem selecionadas
- Um atributo necessario para que o select faça sentido.

## octgroup 

- Vai dar um titulo para nossas opções
- Separar opções, dar mais sentido.

# Formularios - Entrada de dados

## Inputs:

- Um dos mais usados em formularios 
- Aceita os mais diversos tipos de dados
- Um dos mais poderosos e complexos
- Elevado número de combinações

### password

- Coloca uma senha de mneira segura
- esconde o que está sendo digitado no campo
- o estilo da aprsentação do campo, depende do user agent.

atributos: 

minlength / maxlength: o número minimo e máximo de caracteres
para este campo. 

size: o número aceitável de caracteres que essse campo deverá
conter.

pattern: expressão regular par validar o que está sendo digitado 
no campo. Altamente recomendado o uso de um padrão de segurança alta de senhas. 
exemplo: queremos que a senha contenha caracteres hexadecimais com o limite minimo

### email

- Espera que o usuário digite um email.
- Irá vlidar se o valor digitado é um email.

atributos: 

- placeholder: colocará um texto interno no campo
- readonly/disabled: desativará o campo.
- value: vai definir um valor padrão para seu campo, poderá ser alterado.
- required: fará com que o campo seja obrigatorio.

### url 

- Espera que o usuário digite uma url.
- Irá validar se o valor digitado é uma url.

atributos: 

- placeholder
- readonly/ disabled
- value
- required
- minlength/maxlength
- size

### file

- Usuário poderá escolher 1 ou mais arquivos para enviar
no formulário.

atributos: 

- value
- accept: descreve que tipos de arquivos serão aceitos.
- files
- multiple

### color

- Interface para selecionar cor
- color picker

atributos: 

- value: rgb (se invalido, o preto será exibido.)
- list (datalist)

### checkbox

- Caixas que podem ser marcadas.
- Selecionar um valor para ser enviado.
- Se não selecionados, não será enviado nenhum dado.

atributos: globais, value, checked.

### radio

- Projetado para selecionar uma única opção de um grupo
de opções.

atributos: value, checked

### search

- Para campos de busca
- É igual ao campo do tipo text, mas poderá ser um pouco
diferente dependendo do user agent.

atributos: list / datalist, pattern

- aria-label: serve para acessibilidade, mesma funcionalidade da tag label.

### number

- Entrada de número

Atributos: min/max, step, list

### range

- Controle para selecionar um valor númerico
- Slider ou dial control.

atributos: min/max, step.