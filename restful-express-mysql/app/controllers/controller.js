const Article = require("../models/article-model.js");

// Create and Save a new Article
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Add new article
  const article = new Article({
    title: req.body.title,
    publishedAt: req.body.publishedAt,
    categories: req.body.categories,
    contents: req.body.contents
  });

  // Save Article in the database
  Article.create(article, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while add new item."
      });
    else res.send(data);
  });
};

// Retrieve all Article from the database (with condition).
exports.findAll = (req, res) => {
  const title = req.query.title;

  Article.getAll(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving article types."
      });
    else res.send(data);
  });
};

// Find a single Article by Id
exports.findOne = (req, res) => {
  Article.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Article with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Article with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};

// Update a Article identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Article.updateById(
    req.params.id,
    new Article(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Article with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Article with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Article with the specified id in the request
exports.delete = (req, res) => {
  Article.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Article with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Article with id " + req.params.id
        });
      }
    } else res.send({ message: `Article with id ${req.params.id} was deleted successfully!` });
  });
};

// Delete all Article data from the database.
exports.deleteAll = (req, res) => {
  Article.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all data."
      });
    else res.send({ message: `All article data were deleted successfully!` });
  });
};
