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

var nbfucntion = 0;
function TESTfucntion(requetes,) {
    nbfucntion++;
    console.log(`execution de la focntion, totale: ${nbfucntion}`)
    for (const item of requetes) {
    var keycode = item?.keycode;
    var ordre = item?.ordre;
    var autre = item?.autre;
    var typeProduit = item?.produitAjouter.type;
    var produitAjouter = item?.produitAjouter;

    console.log(`${keycode} \n${ordre} \n${autre} \n${typeProduit} \n${produitAjouter}`)

    if(autre == 'BDD'){
        // Exécution de la requête avec pool.query
        pool.query(insertQuery, (err, res) => {
            if (err) {
            console.error('Erreur lors de l\'insertion des données', err);
            } else {
            console.log('Données insérées avec succès', res);
            }
 
        });
    }else{
        console.log("autre n'est pas == a bdd")
    }

    if (autre == 'SELECT') {
        pool.query('SELECT * FROM users', (err, res) => {
            if (err) {
                console.log('Erreur lors de la sélection des données', err);
            } else {
                console.log('Résultats de la sélection:', res.rows); // Afficher les lignes de résultats
            }
        });
    } else {
        console.log("autre n'est pas == a SELECT");
    }

    

    }
    // console.log(requetes)
}

//test bdd
// ajouter requetes dans la bdd et print 


module.exports = { TESTfucntion };
