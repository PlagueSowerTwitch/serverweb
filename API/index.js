const express = require('express');
const app = express();
const port = 4000;


//import des routes
const userRoutes = require('./user/userRoutes');
const authenticatorRoutes = require('./authenticator/authenticatorRoutes');
const articlesRoutes = require('./articles/articlesRoutes');

//middelware 
app.use(express.json()) 


// Routes API
app.use('/api/user', userRoutes);
app.use('/api/articles', articlesRoutes);
app.use('/api/authenticator',authenticatorRoutes );

//----------------------------------------------pour les test ----------------
    app.get('/test', (req, res) =>{
      res.sendFile(`${__dirname}/Asupprimer/login.html`)   
    })
    app.get('/login.css', (req, res) =>{
      res.sendFile(`${__dirname}/Asupprimer/login.css`)   
    })
    app.get('/bdd.js', (req, res) =>{
      res.sendFile(`${__dirname}/Asupprimer/BDD.js`)   
    })
//----------------------------------------------------------------------------------


app.listen(port, () => {
console.log(`Server is running on http://localhost:${port}`);
});
 
module.exports = app;










