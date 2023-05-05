const axios = require("axios");

require("dotenv").config(); // process.env

const URL = process.env.API_URL;
const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

const STATUS_OK = 200;
const STATUS_ERROR = 404;

async function getCharById(req, res) {
  try {
    const { id } = req.params;
    const { data } = await axios.get(`${URL}${id}`);
    if (data.name) {
      // console.log("ininininininin")
      const character = {
        id: data.id,
        status: data.status,
        name: data.name,
        species: data.species,
        origin: data.origin?.name,
        image: data.image,
        gender: data.gender,
        location: data.location?.name,
      };
      return res.status(STATUS_OK).json(character);
    }
    else {
      res.status(STATUS_ERROR).json({ message: "character not found" });
    }
  } catch (error) {
    res.status(STATUS_ERROR).json({ message: error });
  }
}
// edit [{}{}{}] -> map  -> [{},{},{}]
// filter [{}{}{}] -> filter [{}]

function getAllChar(req, res) {
  try {
    axios.get(`${URL}`).then(({ data }) => {
      if (data) {
        // *** ERROR al usar filter y no map para editar los campos y que estaba en data.results
        const characters = data.results.map((ch) => {
          const character = {
            id: ch.id,
            status: ch.status,
            name: ch.name,
            species: ch.species,
            origin: ch.origin?.name,
            image: ch.image,
            gender: ch.gender,
          };
          return character;
        });
        // console.log(":::", characters);
        res.status(STATUS_OK).json(characters);
      } else {
        res.status(STATUS_ERROR).json({ message: "character not found" });
      }
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

module.exports = {
  getCharById,
  getAllChar,
};


/* const axios = require("axios");

const getCharById = async (req, res) => {
  try {
    const URL = "https://rickandmortyapi.com/api/character";
    const { id } = req.params;

    const response = await axios.get(`${URL}/${id}`);
    const { status, name, species, origin, image, gender } = response.data;

    if (name) {
      const character = {
        id,
        name,
        species,
        origin,
        image,
        gender,
        status,
      };
      res.status(200).json(character);
    } else {
      res.status(404).json({ message: "Not found" });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getCharById,
};

 */










/* const axios = require("axios");


const getCharById = (req, res) => {
  const URL = "https://rickandmortyapi.com/api/character";
  const { id } = req.params
  
  axios
    .get(`${URL}/${id}`)
    .then(response => response.data)
    .then(({status, name, species, origin, image, gender}) => {
      if (name){
        const character = {
          id,
          name,
          species,
          origin,
          image,
          gender,
          status
        }
        res.status(200).json(character);
      }else {
        res.status(404).json({ message: "Not found" });
      }
    })
    .catch(error => res.status(500).send(error.message))
}

    module.exports = {
      getCharById
    }; */
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    /* .then(response => {    Mi solucion
      if (response.data) {
        const character = {
          id: response.data.id,
          status: response.data.status,
          name: response.data.name,
          species: response.data.species,
          origin: response.data.origin.name,
          image: response.data.image,
          gender: response.data.gender
        };
        res.status(200).json(character);
      } else {
        res.status(404).json({ message: "Not found" });
      }
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ message: error.message });
    });
  }
  */






/* const axios = require("axios");

const getCharById = (res, id) => {
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response = response.data)
    .then(({name, gender, species, origin, image, status}) => {
      const character = {
        id,
        name,
        gender,
        species,
        origin,
        image,
        status
      }

      return res
              .writeHead(200, {"Content-type": "application/json"})
              .end(JSON.stringify(character))
    })
    .catch((error) => {
        return res
                .writeHead(500, {"Content-type": "text/plain"})
                .end(error.message);
    })
};

module.exports = {
  getCharById
} */


















/* const successH = (response, res) => {
  //los datos que quiero sacar = response.data
  const {id, image, name, gender, species} = response.data;
  res.writeHead(200, {"Content-type": "application/json"});
  res.end(JSON.stringify({id,image,name,gender,species}))
};

const errorH = (error, res) => {
  res.writeHead(500, {"Content-type": "text/plain"});
  res.end(error.message);
};

const getCharById = (res, id) => {
  axios
    .get(`${URL_BASE}/character/${id}?/${API_KEY}`)
    .then((response) => successH(response, res))
    .catch((error) => errorH(error, res));
}; */


