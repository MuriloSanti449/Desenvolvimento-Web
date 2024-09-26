const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Configura o Express para servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para manipular dados enviados via POST
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Para manipular dados JSON

// Rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para a página "Sobre"
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// Rota para simular upload de arquivo via POST
app.post('/upload', (req, res) => {
    // Aqui você pode acessar os dados enviados, por exemplo:
    console.log(req.body); // Para acessar os dados enviados no formulário
    res.status(200).send('Upload simulado com sucesso!');
});

// Rota para erro 404
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});