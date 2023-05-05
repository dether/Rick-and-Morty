const express = require("express");
const router = express.Router();

const { getCharById,getAllChar } = require("../controller/characters")

router.get("/all",getAllChar) 
router.get("/:id",getCharById)
router.get("/detail/:id",getCharById)

module.exports= router