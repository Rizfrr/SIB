const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const Book = require("./book");

app.use(express.json());

/* all end point */
// GET /books (Create books)
app.post("/api/v1/books", (req, res) => {
  const book = Book.create(req.body);
  res.status(201).json(book);
});

// GET /books (list all books)
app.get("/api/v1/books", (req, res) => {
  const book = Book.list();
  res.status(200).json(book);
});

// GET /books/:id (Read book)
app.get("/api/v1/books/:id", (req, res) => {
  const book = Book.find(req.params.id);
  if (!book) {
    res.status(404).json({ message: "Book not found" });
    return;
  }
  res.status(200).json(book);
});

// PUT /books/:id (Update book)
app.put("/api/v1/books/:id", (req, res) => {
  const book = Book.update(req.params.id, req.body);
  res.status(200).json(book);
});

// DELETE /books/:id (Delete book)
app.delete("/api/v1/books/:id", (req, res) => {
  const book = Book.delete(req.params.id);
  res.status(200).json(book);
});

//! run server
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
