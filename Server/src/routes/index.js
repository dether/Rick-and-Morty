/* const router = require("express").Router() */
const express = require("express");
const router = express.Router();

// controladores
const characters = require("./character");
const favorites = require("./favorites");
const login = require("./login");

router.use("/character", characters);
router.use("/fav", favorites);
router.use("/login", login);

/* router.get('/character/:id', (req , res) => {
    getCharById(req, res);
})

router.get('/login', (req, res) => {
    login(req, res);
})

router.post('/fav', (req, res) => {
    postFav(req, res);
})

router.delete('/fav/:id',(req, res) => {
    deleteFav(req, res);
}) */



module.exports = router;