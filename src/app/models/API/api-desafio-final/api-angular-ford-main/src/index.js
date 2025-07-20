const express = require("express");
const path = require("path");
const cors = require("cors")

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "..", "public/img")));
app.post("/login", (req, res) => {
    try {
        const { nome, senha } = req.body

        if (!nome || !senha) {
            return res.status(400).json({
                message: "O campo de usuário ou senha não foi preenchido!"
            });
        }

        if (nome !== "admin" || senha !== "123456") {
            return res.status(401).json({
                message: "O nome de usuário ou senha está incorreto ou não foi cadastrado!"
            });
        }

        return res.status(200).json({
            id: 1,
            nome: "admin",
            email: "admin@email.com"
        });

    } catch (error) {
        return res.status(500).json({
            message: "Falha na comunicação com o servidor!"
        });
    }
});

app.get("/roupas", (req, res) => {
    try {
        const roupas = [
            {
                id: 1,
                nome:"Vestido Midi formas Geometricas",
                tipoDeTecido:"Poliamida",
                tamanhos: ["P","M","G","GG"],
                img: "http://localhost:3001/midigeografico.jpeg"
            },
            {
                id: 2,
                nome:"Vestido Midi Floral",
                tipoDeTecido:"Poliamida",
                tamanhos: ["P","M","G","GG"],
                img: "http://localhost:3001/midifloral.jpeg"
            },
            {
                id: 3,
                nome:"Vestido Ester",
                tipoDeTecido:"Poliamida",
                tamanhos: ["P","M","G","GG"],
                img: "http://localhost:3001/vestidoester.jpeg"
            },
            {
                id: 4,
                nome:"Macacão Eduarda",
                tipoDeTecido:"Algodão",
                tamanhos: ["P","M","G","GG"],
                img: "http://localhost:3001/macacaoeduarda.jpeg.jpeg"
            }
        ];

        return res.status(200).json(roupas);


    } catch (error) {
        return res.status(500).json({
            message: "Falha na comunicação com o servidor, tente novamente mais tarde!"
        });
    }
});

app.post("/estoque", (req, res) => {
    try {
        const { id } = req.body;

        const estoque = [

        {
            id: 1,
            nome:"Vestido Midi formas Geometricas",
            quantidade:[5,7,5,4],
            tamanhos: ["P","M","G","GG"],
            img: "http://localhost:3001/midigeografico.jpeg"
        },
        {
            id: 2,
            nome:"Vestido Midi Floral",
            quantidade:[4,5,3,2],
            tamanhos: ["P","M","G","GG"],
            img: "http://localhost:3001/midifloral.jpeg"
        },
        {
            id: 3,
            nome:"Vestido Ester",
            quantidade:[4,5,3,2],
            tamanhos: ["P","M","G","GG"],
            img: "http://localhost:3001/vestidoester.jpeg.jpeg"
        },

        {
            id: 4,
            nome:"Macacão Eduarda",
            quantidade:[4,5,3,2],
            tamanhos: ["P","M","G","GG"],
            img: "http://localhost:3001/macacaoeduarda.jpeg"
        }
    ];

        const item = estoque.find(e => e.id === id);
        if (!item) {
            return res.status(404).json({ message: "Roupa não encontrada no estoque" });
        }

        return res.status(200).json(item);
    } catch (error) {
        return res.status(500).json({
            message: "Erro no servidor"
        });
    }
});


app.listen(3001, () => {
    console.log("http://localhost:3001/");
});
