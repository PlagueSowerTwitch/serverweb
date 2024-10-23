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


app.get('/', (req, res)=>{ // get all user 
    pool.query('SELECT * FROM users', (err, result) => { //utilisation de result pour eviter la confusion avec res 
        if (err) {
            console.log('PANIK')
            res.status(201).send(err);
        }
        res.status(200).json(result.rows); 
        console.log(result)

    });
});
app.get('/:email', (req, res)=>{ // get user by email
    const email = req.params.email

    pool.query(`SELECT CASE WHEN EXISTS(SELECT email FROM users WHERE email = $1) THEN 1 ELSE 0 END`,[ email ], (err, result) => { //utilisation de result pour eviter la confusion avec res 
        if (err) {
            console.log(err)
            res.status(201).send("error "+err.detail);
        }else{
        res.status(200).json(result.rows);
        console.log(result)            
        }
    });
});



app.post('/', (req, res)=>{ //creer un utiliateur avec un id
    const { name, email, motdepasse,  } = req.body;
        pool.query('INSERT INTO users ( nom, email, motdepasse) VALUES ($1, $2, $3)', [ name, email, motdepasse], (err, result) => {
        if (err) {
            console.log(err)
            res.status(201).send("error "+err.detail);
        }else{
        res.status(200).send(" ajouté !");
        console.log(result)    
        }
    })
});


//ave un email 
app.put('/:id', (req, res)=>{ //modifier un user
    const { name, email, motdepasse,  } = req.body;
    const id = parseInt(req.params.id)
        pool.query(`UPDATE users SET nom = $1, email = $2, motdepasse = $3   WHERE id_user = $4`,[name, email, motdepasse, id],(err, result) => {
            if (err) {
                console.log(err)
                res.status(201).send("error "+err.detail);
            }else{
                res.status(200).send("informations modifiées !");
                console.log(result)
            }
        })
});


app.delete('/:id', (req, res)=>{ //supprimer un user
    const id = parseInt(req.params.id)
        pool.query('DELETE FROM users WHERE id_user = $1', [id], (err, result) => {
        if (err) {
            console.log(err)
            res.status(201).send("error "+err.detail);
            }else{
            res.status(200).send("user supprimé !");
            console.log(result)
            }
    })
});

module.exports = app;



