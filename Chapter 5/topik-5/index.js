const express = require("express");

const app = express();
const { Article } = require("./models");

const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get("/api/v1/articles", async (req, res) => {
  try {
    const articles = await Article.findAll();
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/v1/articles/:id", async (req, res) => {
  try {
    const article = await Article.findByPk(req.params.id);
    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/api/v1/articles", (req, res) => {
  Article.create(req.body)
    .then((article) => {
      res.status(201).json(article);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

app.put("/api/v1/articles/:id", async (req, res) => {
  try {
    const article = await Article.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    });
    res.status(200).json(article[1][0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  // try {
  //   const article = await Article.findByPk(req.params.id);
  //   article.update(req.body);
  //   res.status(200).json(article);
  // } catch (error) {
  //   res.status(500).json({ error: error.message });
  // }
});

app.delete("/api/v1/articles/:id", async (req, res) => {
  try {
    const article = await Article.findByPk(req.params.id);
    article.destroy();
    res.status(204).json(article);
  } catch (error) {
    res.status(500).json({ error: "Can't delete" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
