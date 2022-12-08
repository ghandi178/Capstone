module.exports = app => {
    const article = require("../controllers/controller.js");
    var router = require("express").Router();

    // ARTICLES
    // Add new article item
    router.post("/article/", article.create);

    // Retrieve all article
    router.get("/article/", article.findAll);

    // Retrieve a single article with id
    router.get("/article/:id", article.findOne);

    // Update a article with id
    router.put("/article/:id", article.update);

    // Delete a article with id
    router.delete("/article/:id", article.delete);

    // Delete all article
    router.delete("/article/", article.deleteAll);

    app.use('/api', router);
};