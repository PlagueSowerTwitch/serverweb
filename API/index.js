const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');

//utiliser cors pour la gestion de requetes autorisé 
//import des routes
const userRoutes = require('./user/userRoutes');
const authenticatorRoutes = require('./authenticator/authenticatorRoutes');
const articlesRoutes = require('./articles/articlesRoutes');

app.use(cors()); 
//middelware 
app.use(express.json()) 


// Routes API
app.use('/api/user', userRoutes);
app.use('/api/articles', articlesRoutes);
app.use('/api/authenticator',authenticatorRoutes );




app.listen(port, () => {
console.log(`Server is running on http://localhost:${port}`);
});
 
module.exports = app;










