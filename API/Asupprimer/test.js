const express = require('express');

const app = express();



app.get('/test', (req, res) =>{
  res.sendFile(`${__dirname}/Asupprimer/login.html`)   
})
app.get('/login.css', (req, res) =>{
  res.sendFile(`${__dirname}/Asupprimer/login.css`)   
})
app.get('/bdd.js', (req, res) =>{
  res.sendFile(`${__dirname}/Asupprimer/BDD.js`)   
})





const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur écoutant sur le port ${PORT}`);
});





