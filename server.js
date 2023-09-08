const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

// Middleware para processar JSON e dados do formulário
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rota para receber e salvar os registros do front-end
app.post('/salvar-registro', (req, res) => {
    const novoRegistro = req.body;
    // Carregar registros existentes (se houver algum)
    let registros = [];
    try {
        registros = JSON.parse(fs.readFileSync('registros.json', 'utf-8'));
    } catch (error) {
        // O arquivo ainda não existe ou está vazio
    }
    // Adicionar o novo registro à matriz de registros
    registros.push(novoRegistro);
    // Salvar a matriz atualizada de registros no arquivo JSON
    fs.writeFileSync('registros.json', JSON.stringify(registros, null, 2));
    res.sendStatus(200);
});

// Rota para obter todos os registros
app.get('/registros', (req, res) => {
    try {
        const registros = JSON.parse(fs.readFileSync('registros.json', 'utf-8'));
        res.json(registros);
    } catch (error) {
        // O arquivo ainda não existe ou está vazio
        res.json([]);
    }
});

app.listen(port, () => {
    console.log(`Servidor back-end rodando na porta ${port}`);
});
