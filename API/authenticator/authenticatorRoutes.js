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

});
 

app.put('/:id', (req, res)=>{ 

});

app.delete('/:id', (req, res)=>{ 
 
});

module.exports = app;



