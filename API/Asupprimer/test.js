const express = require('express');

const app = express();
const router = express.Router();




router.get('/', (req, res) => {
  res.json({ message: 'Liste de toutes les ressources' });
});

router.post('/', (req, res) => {
  res.json({ message: 'Ressource créée' });
});

router.get('/:id', (req, res) => {
  res.json({ message: `Ressource avec l'ID ${req.params.id}` });
});

router.put('/:id', (req, res) => {
  res.json({ message: `Mise à jour de la ressource avec l'ID ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
  res.json({ message: `Suppression de la ressource avec l'ID ${req.params.id}` });
});

app.use('/api/resources', router);





const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur écoutant sur le port ${PORT}`);
});





