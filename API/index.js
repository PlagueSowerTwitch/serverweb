const express = require('express');
const app = express();
const port = 4000;
const BDD = require('./BDD');


// serv web a spammer avec post man qui  requpere la req et l'envoie a la focntion 


app.use(express.json()) //middelware 
app.post('/api', (req, res, ) => {    
  console.log('ok')

  const test = BDD.TESTfucntion(req.body);

  res.send('reçu !')
});
module.exports = app


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  });
 





