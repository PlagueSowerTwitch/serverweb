const express = require('express');
const app = express();

const port = 3000;

app.use(express.json()); // Permet de lire le JSON dans les requêtes

let tasks = [
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: true },
    { id: 3, title: "Task 3", completed: false }
    ];

app.get('/', function (req, res) {
    res.send('hello world')
  })

 app.get('/tasks', (req, res) => {
 res.json(tasks);
 });

 app.get('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(t => t.id === taskId);
    if (task) {
    res.json(task);
    } else {
    res.status(404).send('Task not found');
    }
    });

 app.post('/tasks', (req, res) => {
    const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    completed: false
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
    });


    app.put('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(t => t.id === taskId);
    if (task) {
    task.title = req.body.title || task.title;
    task.completed = req.body.completed !== undefined ? req.body.completed :
    task.completed;
    res.json(task);
    } else {
    res.status(404).send('Task not found');
    }
    });


    app.delete('/tasks/:id', (req, res) => {
        const taskId = parseInt(req.params.id);
        tasks = tasks.filter(t => t.id !== taskId);
        res.status(204).send(); // 204 No Content
        });

    app.get('/post', (req, res) =>{
 
    })
    app.get('/server.js', (req, res) =>{
      
    })
    app.get('/server.css', (req, res) =>{
          
    })

// fair un dossier pour le get / put / post / autre




 app.listen(port, () => {
 console.log(`Server is running on http://localhost:${port}`);
 });





//app.use(express.json()) //middelware 

//app.post('/api', (req, res, ) => {    
 //       console.log(req)
 //       res.send('reçu !')
//});

//module.exports = app


//server.listen(3000, () => {
  //  console.log("Server running at http://127.0.0.1:3000")
//})