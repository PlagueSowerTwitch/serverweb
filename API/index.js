const express = require('express');
const app = express();
const port = 4000;


//import des routes
const userRoutes = require('./user/userRoutes');
const authenticatorRoutes = require('./authenticator/authenticatorRoutes');
// const productRoutes = require('./product/productRoutes');

//middelware 
app.use(express.json()) 



// Routes API
app.use('/api/user', userRoutes);
app.use('/api/product', authenticatorRoutes);
// app.use('/api/authenticator', productRoutes);



//function gestion erreur ?

app.listen(port, () => {
console.log(`Server is running on http://localhost:${port}`);
});
 
module.exports = app;










