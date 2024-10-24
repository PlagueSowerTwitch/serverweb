//code pour frondend

const express = require('express');
const app = express();
const port = 3000;



//----------------------------------------------pour les test ----------------
    app.get('/test', (req, res) =>{
      res.sendFile(`${__dirname}/login.html`)   
    })
    app.get('/login.css', (req, res) =>{
      res.sendFile(`${__dirname}/login.css`)   
    })
    app.get('/bdd.js', (req, res) =>{
      res.sendFile(`${__dirname}/BDD.js`)   
    })


app.listen(port, () => {
console.log(`Server is running on http://localhost:${port}`);
});
 
module.exports = app;










