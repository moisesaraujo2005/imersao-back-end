import express from "express";

const posts = [
    {  
    id: 1, 
      descricao: "Gatinho curioso olhando para a câmera",
      imagem: "https://placekitten.com/200/300"
    },
    {
    id: 2,
      descricao: "Gatinho dormindo em uma cesta",
      imagem: "https://placekitten.com/200/300"
    },
    {

    id: 3,
      descricao: "Gatinho brincando com um novelo de lã",
      imagem: "https://placekitten.com/200/300"
    },
    {
      descricao: "Gatinho mia para a câmera",
      imagem: "https://placekitten.com/200/300"
    },
    {
      descricao: "Gatinho se escondendo atrás de uma planta",
      imagem: "https://placekitten.com/200/300"
    }
  ];

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando..");
});

app.get("/posts" , (req, res) => {
    res.status(200).json(posts);

});

function buscarPostPorID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id); 
    })
}

app.get("/posts/:id" , (req, res) => {
    const index = buscarPostPorID(req.params.id);
    res.status(200).json(posts[index]);

});



