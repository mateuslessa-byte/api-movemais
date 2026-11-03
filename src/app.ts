import express from "express";
import type { Request, Response } from "express";

export interface Livro {
    id: number;
    title: string;
    author: string;
    ano_pub: number;
}

const app = express();

//MIDDLEWARE
app.use(express.json());

const livros: Livro[] = [
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
function buscaLivro(id: string | number): number {
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    });
}

//REQUISIÇÕES
app.get("/", (req: Request, res: Response) => {
    res.status(200).send("Codificação BackEnd");
});

app.get("/livros", (req: Request, res: Response) => {
    res.status(200).json(livros);
});

//REQUISIÇÃO POST (CADASTRAR NOVO LIVRO)
app.post("/livros", (req: Request, res: Response) => {
    const {id, title, author, ano_pub} = req.body;

    const novoLivro: Livro = ({
            id: Number(id)
            title,
            author,
            ano_pub: Number(ano_pub)
        });
    //livros.push(req.body);
    //res.status(201).send("Livro Cadastrado com Sucesso!");
});

//REQUISIÇÃO PUT (ATUALIZAR DADOS)
app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);

    if (index === -1) {
        return res.status(404).json({ mensagem: "Livro não encontrado." });
    }

    livros[index].title = req.body.title;
    res.status(200).json(livros);
});

export default app;