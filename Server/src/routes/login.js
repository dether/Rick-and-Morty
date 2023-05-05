const express = require("express");
const router = express.Router();

const {login, register} = require("../controller/login")

router.get("/",login)
router.post("/register",register)


module.exports= router