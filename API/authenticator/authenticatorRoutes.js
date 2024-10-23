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





app.get('/', (req, res)=>{ 

});

app.get('/:id', (req, res)=>{ 

});


app.post('/', (req, res)=>{ 
    const { email, motdepasse } = req.body;
    pool.query('SELECT CASE WHEN EXISTS(SELECT * FROM users WHERE email = $1 AND motdepasse = $2) THEN 1 ELSE 0 END', [ email, motdepasse], (err, result) => {

    if (err) {
        console.log(err)
        res.status(201).send("error "+err.detail);
    }else{
    res.status(200).send(result.rows);
    console.log(result)    
    }
  })
});
 
 
app.put('/:id', (req, res)=>{ 

});

app.delete('/:id', (req, res)=>{ 
 
});

module.exports = app;



