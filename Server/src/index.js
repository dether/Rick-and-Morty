const server = require("./app")
const PORT = 3001;



server.listen(PORT, () => {
  console.log(`Server raised in port: ${PORT}`);
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
