# App desafio teste front-end Foco Multimídia

O app está utilizando o sistema de gestão de pacotes npm, basta usar:

```
npm i
````

## Ponderações

* O sistema do github não permite requisições REST, sendo nescessário utilizar o >https://rawgit.com;
> GET https://rawgit.com/faelsmello/teste-front-end/master/db.json

* Foi utilizado o plugin ngStorage para o gerenciamento dos dados no local storage;

* Foi utilizado o plugin ui-router para o gerenciamento de rotas;

* Para fins de de um melhor desenvolvimento o plugin angular.viacep seria uma opção viável para o auto-fill dos dados de endereço tanto no formulário de cadastro tanto no formulário de de edição de cadsatro, sendo nescessário habilitá-lo e desativar o auto-fill manual. Como o objetivo do desafio é a avaliação das habilidade de desenvolvimento o auto-fill é feito de modo manual com requisição feita via service e substituição das variáveis das models via controller;

* A requisição dos dados iniciais é feito no primeiro carregamento da página, sendo imediatamente carregados no local storage. A página de pesquisa faz a leitura dos dados do local storage, as páginas editar e cadastrar alteram e inserem dados no local storage;



