const express = require("express");
const server = express();

const morgan = require("morgan");

const routes = require("./routes/index");

// la info que me llega en formato json lo pasa a js
server.use(express.json()); // middleware

const urlencoded = express.urlencoded({ extended: false });
// form -> data

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(morgan("dev")); //

server.use("/rickandmorty", routes);

server.get("/",(req,res)=>{
  res.status(200).json({message: "in first server in EXPRESS", app: "BUCARAMANGA"})
})

module.exports = server;

