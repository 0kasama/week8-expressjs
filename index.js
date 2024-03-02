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

app.get("/film/:id", (req, res) => {
  const {id} = req.params;
  pool.query(
    "SELECT film_id, title FROM film WHERE film_id = $1", [1],
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

app.get("/category/:id", (req, res) => {
  const {id} = req.params;
  pool.query(
    "SELECT film_id, title, name FROM film INNER JOIN category ON film.film_id = category.film_id WHERE category.category_id = $1", [id],
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
