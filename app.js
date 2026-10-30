import express from "express";

const app = express();

//MIDDLEWARE
app.use(express.json());

const livros = [
    {
        id: 1,
        title: "Sherlock Holmes: O Mistério",
        author: "Hans Donner",
        ano_pub: 1990
    },

    {
        id: 2,
        title: "Cidade de Papel",
        author: "Cora Coraline",
        ano_pub: 2016
    }
]

//FUNÇÕES
function buscaLivro(id){
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    });
}

//REQUISIÇÕES
app.get("/", (req, res) => {
    res.status(200).send("Codificação BackEnd");
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});
app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

//REQUISIÇÃO POST (CADASTRAR NOVO LIVRO)
app.post("/livros", (req, res) => {
    const {id, title, author, ano_pub} = req.body;

    res.json({
        mensagem: 'Livro Cadastrado!',
        livro: {
            id,
            title,
            author,
            ano_pub
        }
    })

    //livros.push(req.body);
    //res.status(201).send("Livro Cadastrado com Sucesso!");
});

//REQUISIÇÃO PUT (ATUALIZAR DADOS)
app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].title = req.body.title;
    res.status(200).json(livros);
})

export default app;