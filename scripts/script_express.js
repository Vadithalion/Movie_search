const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`El servidor run run run run en ${PORT}`);
});

app.get('/', (req, res) => res.send("brrrrrrruuuuuuuuuuuuuuummmmmm"));

app.get('/movies', (req, res) => console.log('TODO'));
app.get('/movies/:id', (req, res) => {
    let id = req.params.id
    console.log('TODO');
});

app.post('/movie', (req, res) => {
    let body = req.body;
    console.log('TODO');
});

app.put('/movie/:id', (req, res) => {
    let id = req.params.id;
    let body = req.body;
    console.log('TODO');
});

app.delete('/movie/:id', (req, res) => {
    let id = req.params.id;
    console.log('TODO');
});

