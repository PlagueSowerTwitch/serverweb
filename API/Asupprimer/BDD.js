const { Pool } = require('pg');

// Configuration de la connexion
const pool = new Pool({
  user: 'userpostgres',
  host: 'db', // nom du service PostgreSQL dans docker-compose.yml
  database: 'nomDeTaDB',
  password: 'yvbie76ic7',
  port: 5432
});

pool.connect().then(()=>console.log('oui la bdd a marché'))
pool.connect().then(() => {
    console.log('oui la bdd a marché');
  }).catch(err => {
    console.error('Erreur avec la bdd', err);
  });
// Requête SQL pour insérer des données

const insertQuery = `
  INSERT INTO users (email, motdepasse, nom, prenom)
  VALUES
  ('test1@example.com', 'password123', 'Dupont', 'Jean'),
  ('test2@example.com', 'securepass456', 'Martin', 'Lucie'),
  ('test3@example.com', 'mypassword789', 'Durand', 'Pierre'),
  ('test4@example.com', 'complexePass123', 'Lefevre', 'Julie'),
  ('test5@example.com', 'strongPass1234', 'Moreau', 'Sophie');
`;



module.exports = pool;

module.exports = { TESTfucntion };
