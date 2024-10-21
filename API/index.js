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



//function gestion erreur ?

app.listen(port, () => {
console.log(`Server is running on http://localhost:${port}`);
});
 
module.exports = app;










