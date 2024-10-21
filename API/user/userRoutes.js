const express = require('express');
const app = express();

const { Pool } = require('pg');

// Configuration de la connexion
const pool = new Pool({
  user: 'userpostgres',
  host: 'db', // nom du service PostgreSQL dans docker-compose.yml
  database: 'nomDeTaDB',
  password: 'yvbie76ic7',
  port: 5432
});

// CRUD routes pour les utilisateurs

app.get('/', (req, res)=>{ // get tt les user 
    pool.query('SELECT * FROM users', (err, result) => { //utilisation de result pour eviter la confusion avec res 
        if (err) {
            console.log('PANIK')
            res.status(201).send(err);
        }
        res.status(200).json(result);
        console.log(result)

    });
});

app.get('/:id', (req, res)=>{ // get user par id
    const id = parseInt(req.params.id)
    console.log(id);//test
    pool.query(`SELECT * FROM users WHERE id_user = ${id} `, (err, result) => { //utilisation de result pour eviter la confusion avec res 
        if (err) {
            console.log('PANIK')
            res.status(201).send(err);
        }
        res.status(200).json(result);
        console.log(result)
    });
});



app.post('/', (req, res)=>{ //creer un utiliateur avec un id
    const { id_user, name, email, motdepasse, prenom } = req.body;

    pool.query('INSERT INTO users (id_user, nom, prenom, email, motdepasse) VALUES ($1, $2, $3, $4, $5)', [id_user, name, prenom, email, motdepasse], (err, result) => {
    if (err) {
        console.log('PANIK')
        res.status(201).send(err);
    }
      res.status(200).send(result);
      console.log(result)
    })
});

 

app.put('/:id', (req, res)=>{ //modifier un user
    const { id_user, name, email, motdepasse, prenom } = req.body;
    const id = parseInt(req.params.id)
    pool.query(`UPDATE users SET nom = $1, prenom = $2, email = $3, motdepasse = $4   WHERE id_user = ${id}`,[name, prenom, email, motdepasse],(err, result) => {
          if (err) {
            console.log('PANIK')
            res.status(201).send(err);
          }
          res.status(200).send(result);
          console.log(result)

        })

});
app.delete('/:id', (req, res)=>{ //supprimer un user
    const id = parseInt(req.params.id)
    pool.query('DELETE FROM users WHERE id_user = $1', [id], (err, result) => {
    if (err) {
        console.log('PANIK')
        res.status(201).send(err);
        }
        res.status(200).send(result);
        console.log(result)

    })
});

module.exports = app;



