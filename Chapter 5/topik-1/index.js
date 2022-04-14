const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;
const Book_msg = `Terima kasih telah menambahkan data`;

function isAdmin(req, res, next) {
  if (req.query.iam === "admin") {
    next();
    return;
  }
  res.status(401).send("You are not authorized to view this page");
}

app.use(express.urlencoded());

app.get("/", (req, res) => {
  // res.send("Hello World coba1");
  res.render("index.ejs", {
    name: req.query.name || "Guest",
  });
});

app.get("/api/v1/books/:id", isAdmin, (req, res) => {
  console.log("Book.id", req.params.id);
  res.send(`<h1>Cari buku dengan id : ${req.params.id}</h1>`);
});

app.get("/api/v1/books", isAdmin, (req, res) => {
  console.log(req.query);
  res.status(200).send(`Request buku dengan author ${req.query.author}`);
});

// ! POST
app.post("/api/v1/books", isAdmin, (req, res) => {
  console.log(req.body);
  res.status(201).send(Book_msg);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
