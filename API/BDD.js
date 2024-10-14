const { Pool } = require('pg');

// Configuration de la connexion
const pool = new Pool({
  user: 'userpostgres',
  host: 'db', // nom du service PostgreSQL dans docker-compose.yml
  database: 'nomDeTaDB',
  password: 'yvbie76ic7',
  port: 5432
});

module.exports = pool;


function TESTfucntion(requetes,) {
    console.log(requetes)
//test bdd
// ajouter requetes dans la bdd et print 

}




module.exports = { TESTfucntion };
