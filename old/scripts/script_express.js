const express = require('express');
const bodyParser = require('body-parser');

const { Movie } = require ('./movie');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`El servidor run run run run en ${PORT}`);
});

app.get('/', (req, res) => res.send("brrrrrrruuuuuuuuuuuuuuummmmmm"));


// Vista es el req, y Controlador seria el resto de la funcion escrita debajo

app.get('/movies', (req, res) => {
    Movie.findAll().then( movies => {
        res.json(movies);
    });
});

// localhost:3000/movie/:id
app.get('/movies/:id', (req, res) => {
    let _id = req.params.id
    Movie.findAll({ where:{ id: _id}}).then( movies => {
        res.json(movies);
    });
});

// localhost:3000/movie?id=id
app.get('/movies/:id', (req, res) => {
    let _id = req.query.id
    Movie.findAll({ where:{ id: _id}}).then( movies => {
        res.json(movies);
    });
});


app.post('/movie', (req, res) => {
    let { title, description, author } = req.body;
    Movie.create({
        title,
        description,
        author
    })
    .then( () => {
    res.statusCode = 201;
    res.json({status: "OK"});
    })
    .catch( err => {
        res.statusCode = 400;
        res.json({status: "KO", message: err})
    });
});

app.put('/movie/:id', (req, res) => {
    let _id = req.params.id;
    let body = req.body;
    Movie.update(
        {
        title: body.title,
        description: body.description,
        author:  body.author
        },
        {
            where: {id: _id }
        }
        ).then( () => {
            res.statusCode = 201;
            res.json({status: "OK"});
            })
            .catch( err => {
                res.statusCode = 400;
                res.json({status: "KO", message: err})
            });
});

app.delete('/movie/:id', (req, res) => {
    let id = req.params.id;
    let body = req.body;
    //detroy!!!!
    console.log('TODO');
});

//V