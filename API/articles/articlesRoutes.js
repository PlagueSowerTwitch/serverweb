const express = require('express');
const app = express();

const { Pool } = require('pg');

const pool = new Pool({
  user: 'userpostgres',
  host: 'db', 
  database: 'nomDeTaDB',
  password: 'yvbie76ic7',
  port: 5432
});

// rows
app.get('/', (req, res)=>{ // get tt les articles 
    pool.query('SELECT * FROM articles', (err, result) => { 
        if (err) {
            console.log('PANIK')
            res.status(201).send(err);
        }
        res.status(200).json(result);
        console.log(result.rows)

    });
});

app.get('/:id', (req, res)=>{ // get articles par id
    const id = parseInt(req.params.id)
    console.log(id);//test
    pool.query(`SELECT * FROM articles WHERE id_article = ${id} `, (err, result) => { 
        if (err) {
            console.log('PANIK')
            res.status(201).send(err);
        }
        res.status(200).json(result.rows);
        console.log(result)
    });
});


app.post('/', (req, res)=>{ //creer un articles avec un id
    const { id_article, nom, prix, date_ajout,  } = req.body;
    pool.query('INSERT INTO articles (id_article, nom, prix, date_ajout) VALUES ($1, $2, $3, $4)', [id_article, nom, prix, date_ajout], (err, result) => {
    if (err) {
        console.log('PANIK')
        res.status(201).send(err);
     }
    res.status(200).send("INSERT OK");
    console.log(result)
    })
});
 

app.put('/:id', (req, res)=>{ //modifier un articles
    const { nom, prix, date_ajout,  } = req.body;
    const id = parseInt(req.params.id)
    pool.query(`UPDATE articles SET nom = $1, email = $2, motdepasse = $3   WHERE id_article = ${id}`,[nom, prix, date_ajout], (err, result) => {
    if (err) {
        console.log('PANIK')
        res.status(201).send(err);
     }
    res.status(200).send("UPDATE OK");
    console.log(result)
    })
});

app.delete('/:id', (req, res)=>{ //supprimer un articles
    const id = parseInt(req.params.id)
    pool.query('DELETE FROM articles WHERE id_user = $1', [id], (err, result) => {
    if (err) {
        console.log('PANIK')
        res.status(201).send(err);
        }
        res.status(200).send("DELETE OK");
        console.log(result)

    })
});

module.exports = app;



