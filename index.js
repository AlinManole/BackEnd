const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Authors API');
});

var authors = [
    {
        name: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"]
    },
    {
        name: "William Shakespeare",
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
    },
    {
        name: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"]
    },
    {
        name: "Oscar Wilde",
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
    },
]



app.get('/authors/', (req, res) => {
    res.send(authors)
})

app.get('/authors/:id/', (req, res) => {
    const { id } = req.params
    const author = authors[id - 1]
    res.send(author.name + " , " + author.nationality)
})

app.get('/authors/:id/books/', (req, res) => {
    const { id } = req.params
    const book = authors[id - 1].books
    res.send(book)
})

app.get('/json/authors/:id', (req,res) => {
    const { id } = req.params
    const author = authors[id - 1]
    res.json({name : author.name ,nationality : author.nationality })
})
    
app.get('/json/authors/:id/books', (req,res) => {
    const { id } = req.params
    const book = authors[id - 1].books
    res.json({books : book})
})


app.get('*', (req, res) => {
    res.status(404).send("Not found")
  })

app.listen(port, () => {
    console.log('Server started on port: ' + port);
});