const express = require('express');
const app = express();
const port = 4000;
const BDD = require('./BDD');


// serv web a spammer avec post man qui  requpere la req et l'envoie a la focntion 
// // fair un dossier pour les get / put / post / autre



app.use(express.json()) //middelware 


//pas utilisé pour le moments 
app.post('/api', (req, res, ) => {    
  console.log('api req ')
  res.send('reçu !')
});

//pour les req api sur la bdd
app.post('/api/BDD', (req, res, ) => {    
  console.log('api bdd req')
  BDD.TESTfucntion(req.body)
  res.send('reçu !')
});

module.exports = app




app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  });
 





