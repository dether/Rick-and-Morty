const express = require("express");
const router = express.Router();

const {postFav, deleteFav} = require("../controller/favorites")

router.post("/",postFav)
router.delete("/:id",deleteFav)
router.post('/favorites', postFav);
router.delete('/favorites/:id', deleteFav); 

module.exports= router