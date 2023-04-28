const router = require("express").Router()
/* const express = require("express");
const router = express.Router(); */

// controladores
const { getCharById } = require("../controller/getCharById");
const { login } = require("../controller/login");
const { postFav, deleteFav } = require("../controller/handleFavorites");

// Rutas
router.get('/character/:id', getCharById);
router.get('/login', login);
router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav); 

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