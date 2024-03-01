const express = require('express');
const app = express();
const pool = require('./queries');

app.get('/film', (req, res) => {
    pool.queries('select * from film', (err, result) => {
        if(err){
            throw err;
        }
        res.send(result.rows);
    })
});

app.get('/film/id', (req, res) => {
    pool.queries('select film_id, title from film order by film_id asc', (err, result) => {
        if(err){
            throw err;
        }
        res.send(result.rows);
    })
});

app.get('/film/category', (req, res) => {
    pool.queries('select * from category', (err, result) => {
        if(err){
            throw err;
        }
        res.send(result.rows);
    })
});

app.get('/film/category', (req, res) => {
    pool.queries('select film.film_id, film.title as film_film_title, category.category_id, category.name as category_name from film join film_category on film.film_id = film_category.film_id join category on film_category.category_id = category.category_id', (err, result) => {
        if(err){
            throw err;
        }
        res.send(result.rows);
    })
});


app.listen(3000)