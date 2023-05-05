const server = require("./app") // esta es la config de nuestro server
const { conn } = require("./DB_connection") // esta es la config de nuestra DB

const PORT = 3001;

server.listen(PORT, async () => {
  console.log(`Server raised in port: http://localhost:${PORT}`);
  await conn.sync({ force: true });
});


















/* const http = require("http")
const { getCharById } = require("./controller/getCharById");

http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const { url } = req;

  if (url.includes("/rickandmorty/character")) {
    const id = url.split("/").at(-1);
    getCharById(res, +id); 
  }
})
.listen(3002, "localhost"); */

//RUTAS
//rickandmorty/character/id
