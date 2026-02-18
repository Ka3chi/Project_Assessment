require('dotenv').config();
const port = process.env.PORT || 3000;
const express = require('express');
const app = express();

app.use(express.json());

//declaration of variables
let todos = [];
let nextId = 1;

//api post
app.post('/api/todos', (req, res) => {
    const { title } = req.body;

    //error checking
    if (!title || !title.trim()) {
        return res.status(400).json({ 
            error: "Invalid_input",
            message: "Title is required and cannot be empty." 
        });
    }

    //structure of todo
    const newTodo = {
        id: nextId++,
        title: title.trim(),
        done: false,
        createdAt: new Date().toISOString()
    };

    todos.push(newTodo);
    return res.status(201).json(newTodo);
});

//port running
app.listen(port, () => console.log(`Server running on port ${port}`));