const express = require("express");
const app = express();
const pool = require("./queries");

app.get("/film", (req, res) => {
  pool.query("SELECT * FROM film", (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result.rows);
  });
});

app.get("/film/id", (req, res) => {
  pool.query(
    "SELECT film_id, title FROM film order by film_id asc",
    (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result.rows);
    }
  );
});

app.get("/film/category", (req, res) => {
  pool.query("SELECT * FROM category", (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result.rows);
  });
});

app.get("/category", (req, res) => {
  pool.query(
    "SELECT film_id, title, name FROM film INNER JOIN category ON film.film_id = category.category_id",
    (err, result) => {
      if (err) {
        throw err;
      }
      res.send(result.rows);
    }
  );
});

app.get("/actor", (req, res) => {
  pool.query("SELECT * FROM actor", (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result.rows);
  });
});

app.listen(3000);
