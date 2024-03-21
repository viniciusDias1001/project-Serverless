# Projeto Serverless

Este é um projeto Serverless que fornece uma API para gerenciar usuários. Ele inclui funções para criar, listar, obter, atualizar e excluir usuários.

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/): Ambiente de tempo de execução JavaScript
- [Serverless Framework](https://www.serverless.com/): Framework para desenvolvimento e implantação de aplicativos serverless
- [AWS Lambda](https://aws.amazon.com/lambda/): Serviço de computação serverless da Amazon Web Services
- [AWS API Gateway](https://aws.amazon.com/api-gateway/): Serviço para criar, publicar, manter, monitorar e proteger APIs HTTP

## Estrutura do Projeto

my-serverless-project/
|- src/
| |- handlers/
| | |- createUser.handler.js
| | |- getAllUsers.handler.js
| | |- getUserById.handler.js
| | |- deleteUserById.handler.js
| | |- updateUser.handler.js
|- serverless.yml

## Configuração do Serverless

O arquivo `serverless.yml` contém a configuração das funções e endpoints da API.

## Funções

- **createUser**: Cria um novo usuário.
- **getAllUsers**: Retorna uma lista de todos os usuários.
- **getUserById**: Retorna um usuário específico com base no ID.
- **deleteUserById**: Exclui um usuário com base no ID.
- **updateUser**: Atualiza as informações de um usuário com base no ID.

## Como Executar Localmente

1. Instale o Serverless Framework e as dependências do projeto:

    ```
    npm install -g serverless
    npm install
    ```

2. Inicie o servidor local:

    ```
    serverless offline
    ```

3. Os endpoints estarão disponíveis em `http://localhost:3000`.

## Como Contribuir

Contribuições são bem-vindas! Se você quiser melhorar este projeto, siga estas etapas:

1. Faça um fork do repositório
2. Crie uma branch para sua funcionalidade (`git checkout -b feature/nova-funcionalidade`)
3. Faça commit das suas alterações (`git commit -am 'Adiciona nova funcionalidade'`)
4. Faça push para a branch (`git push origin feature/nova-funcionalidade`)
5. Crie um novo Pull Request

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
