const express = require('express');
const app = express()
const cors = require('cors');


const port = 5500;

app.use(express.json());
app.use(cors());

let book = [
    { id: 1, title: 'title one', author: 'author one',year:2021 },
    { id: 2, title: 'title two', author: 'author two',year:2022 },
    { id: 3, title: 'title three', author: 'author three' ,year:2023},
    { id: 4, title: 'title four', author: 'author' ,year:2024},
    { id: 5, title: 'title five', author: 'author' ,year:2025 }
]


app.get('/', (req, res) => {
    res.json(book);
});

app.get('/book', (req, res) => {
    res.json(book);
});


app.post('/book', (req, res) => {
    const{title, author, year} = req.body;
    const newbook = {
        id: book.length + 1,
        title,
        author,
        year
    };

    book.push(newbook);
    res.json(newbook);
});




app.listen(port, () => {
    console.log('Server Running on port http://localhost:5500');
});