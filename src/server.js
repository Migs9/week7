// const express = require("express") // step 1
// const app = express()   // step 2

// app.use("/books", express.static("books")) //step 4 - this sets what the URL should be
// app.use("/", express.static("anotherroute")) // step 5

// app.listen(5001, () => console.log("Server is listening")) // step 3

// // step 4 - - - - type - - - node src/server.js
// // returns the message in console.log

// ---- - - - - - - -- - -- - - --

// const { response } = require("express")
// const express = require("express") 
// const { request } = require("http")
// const app = express()   

// // app.use("/pages", express.static("pages"))
// // app.use("/pages/base", express.static("pages")) 
// // app.use("/pages/movies", express.static("pages"))
// // app.use("/pages/about", express.static("pages"))

// app.use (express.json())

// app.get("/book", (request, response) => {
//     // response.send("Hello from the book route")
//     const book = {
//         title:"Lord of the Rings",
//         author:"Tolkien",
//         genre:"fantasy"
//     }

//     const successResponse = {
//         messsage:"Response sent successfully",
//         book:book
//     }

//     response.send(successResponse)
// })

// // app.get("/movie", (request, response) => {
// //     response.send("Hello from the movie route")
// // })

// app.post("/book", (request, response) => {
//     // console.log(request.body)

//     const newBook = {
//         id:"1234",
//         title: request.body.title,
//         author: request.body.author,
//         genre: request.body.genre,
//     }

//     const successNewResponse = {
//         messsage:"Response sent successfully",
//         book:newBook
//     }
//     response.send(successNewResponse)
//     // response.send("Hello there")
// })

// app.put("/book/:id", (request, response) => {
//     // response.send('Got a PUT request at /book')
//     console.log(request.body)
//     return response.json({
//         messsage: "put route"
//     });
// });

// app.delete('/book/:id', (request, response) => {
//     // response.send('Got a DELETE request at /book')
//     console.log(request.params)
//     return response.json({
//         messsage: "put route"
//     });
// })

// app.listen(5001, () => console.log("Server is listening")) 



const express = require('express');
const app = express();

app.use(express.json());

const books = [
  { id: 1, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
  { id: 2, title: 'Harry Potter and the Philosopher\'s Stone', author: 'J.K. Rowling', genre: 'Fantasy' },
  { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Classic' }
];

// GET a book by ID
app.get('/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).send('The book with the given ID was not found.');
  res.send(book);
});

// CREATE a new book
app.post('/books', (req, res) => {
  const book = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre
  };
  books.push(book);
  res.send(book);
});

// UPDATE an existing book
app.put('/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).send('The book with the given ID was not found.');

  book.title = req.body.title;
  book.author = req.body.author;
  book.genre = req.body.genre;

  res.send(book);
});

// DELETE a book
app.delete('/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).send('The book with the given ID was not found.');

  const index = books.indexOf(book);
  books.splice(index, 1);

  res.send(book);
});

// const port = process.env.PORT || 3000;
app.listen(5001, () => console.log("Server is listening")) 
// app.listen(port, () => console.log(`Listening on port ${port}...`));