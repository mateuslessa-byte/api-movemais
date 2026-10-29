# API MoveMais

Projeto da Turma 105116 para praticar a criação de uma API com Express.

## Preparar o ambiente

Acesse o [repositório no GitHub](https://github.com/mateuslessa-byte/api-movemais)
e clone o projeto:

```bash
git clone https://github.com/mateuslessa-byte/api-movemais.git
cd api-movemais
```

Crie e acesse uma branch de trabalho antes de implementar alterações:

```bash
git switch -c feature/servidor-e-rotas
```

Instale as dependências:

```bash
npm install
```

## Executar o servidor

Para desenvolvimento, com reinicialização automática ao alterar arquivos:

```bash
npm run dev
```

Para iniciar normalmente:

```bash
npm start
```

O servidor usa a porta `3000` por padrão. Defina a variável de ambiente
`PORT` para usar outra porta.

## Rotas GET

Teste em um navegador, Postman ou Thunder Client:

| Método | URL | Resposta |
| --- | --- | --- |
| GET | `http://localhost:3000/` | Mensagem de boas-vindas |
| GET | `http://localhost:3000/livros` | Lista de livros em JSON |

No Postman ou Thunder Client, crie uma requisição GET para cada URL e confirme
que ambas retornam o status `200`.

### Importar no Postman

1. Inicie o servidor com `npm run dev`.
2. No Postman, selecione **Import** e escolha o arquivo
   `postman/MoveMais.postman_collection.json`.
3. Abra a coleção **API MoveMais** e execute **GET - Início** ou **GET - Livros**.