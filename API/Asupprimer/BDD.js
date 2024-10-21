

const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const emailsignup = document.getElementById('emailsignup');
const nomsignup = document.getElementById('nomsignup');
const mdpsignup = document.getElementById('mdpsignup');
const mdplogin = document.getElementById('mdplogin');
const emaillogin = document.getElementById('emaillogin');

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



registerBtn.addEventListener('click', () => {
    container.classList.add("active");
    document.getElementById('checksignup').addEventListener('click',function(){
        console.log("le bouton signup a ete utilise");
        let resultat = pool.query("SELECT CASE WHEN EXISTS(SELECT email FROM users WHERE email='"+emailsignup+"') THEN 1 ELSE 0 END;");
        if (resultat === 0){
            pool.query("INSERT INTO users (email,motdepasse,nom) VALUES ('"+emailsignup+"','"+mdpsignup+"','"+nomsignup+"')");
        } else {
            alert("votre compte existe déjà, veuillez vous connecter.");
        }
    });
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
    document.getElementById('checklogin').addEventListener('click',function(){
        console.log("le bouton login a ete utilise")
        let resultat = pool.query("SELECT CASE WHEN EXISTS(SELECT * FROM users WHERE email='"+emaillogin+"' AND motdepasse='"+mdplogin+"') THEN 1 ELSE 0 END;");
        if (resultat === 1){
            window.location = "compte.html"; 
        } else {
            alert("Mauvais mot de passe ou d'email");
        }
    });
});


