const sql = require("./db.js");

// constructor
const Article = function(article) {
  this.title = article.title;
  this.publishedAt = article.publishedAt;
  this.categories = article.categories;
  this.contents = article.contents;
};

Article.create = (newItem, result) => {
  sql.query("INSERT INTO articles SET ?", newItem, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created article item: ", { id: res.insertId, ...newItem });
    result(null, { id: res.insertId, ...newItem });
  });
};

Article.findById = (id, result) => {
  sql.query(`SELECT * FROM articles WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found article type: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found article with the id
    result({ kind: "not_found" }, null);
  });
};

Article.getAll = (title, result) => {
  let query = "SELECT * FROM articles";

  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("articles: ", res);
    result(null, res);
  });
};

Article.updateById = (id, article, result) => {
  sql.query(
    "UPDATE articles SET title = ?, publishedAt = ?, categories = ?, contents = ? WHERE id = ?",
    [article.title, article.publishedAt, article.categories, article.contents, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Article with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated article item: ", { id: id, ...article });
      result(null, { id: id, ...article });
    }
  );
};

Article.remove = (id, result) => {
  sql.query("DELETE FROM articles WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Article with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted article with id: ", id);
    result(null, res);
  });
};

Article.removeAll = result => {
  sql.query("DELETE FROM articles", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} articles`);
    result(null, res);
  });
};

module.exports = Article;
