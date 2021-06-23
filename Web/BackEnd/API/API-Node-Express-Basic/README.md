# Servidor básico em Node.js
## Objetivo deste código
Demonstar a estrutura minima par se criar um servidor baseado em **Nodejs + Express**. Além disso, criar rotas para o CRUD (Create, Read, Update,Delete) e testa-as utilizando o **Insomnia**, cliente API para testes.

## Configurando Ambiente 
Partindo do principio que você **já tenha instalado** em sua máquina o Noode.Js (caso não tenha, acesse o site do Node.js https://nodejs.org/en/, baixe a versão LTS, e instale. Next, next, next...), instale os seguintes pacotes utilizando seu terminal:

* **Express** : Fremework responsável pelo protocodo **HTTP**, e varias outras ferramentas que facilitam nossa vida em servidores Node.js e APIs.<br> <br>
`npm install -D`


* **Nodemon** : Utilitário que irá nos ajudar no ganho de tempo. Sem ele, toda vez que fizermos alguma alteração em nosso código, será preciso parar o servidor e em seguinda inicia-lo novamente. O Nodemon realiza essa tarefa de forma automática em qualquer alteração feita no código.<br> <br>
`npm install -g nodemon` <br><br>

* **Body Parser** : Middleware capaz de converter os dados de nossa requisição no formato que queremos (neste caso será o *json*), uma vez que o node.js não é capaz de realizar esta tarefa.<br> <br>
`npm install body-parser` <br><br>

* **Insomnia**: Ferramenta indispensável para testar as rotas e API. Baixe isntale no site: https://insomnia.rest/

>Dica : A flag `-D` significa que ele será instalado apenas no seu ambiente de desenvolvimento, assim como `-g` representa instalação global.

