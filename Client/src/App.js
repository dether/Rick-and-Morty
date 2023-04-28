import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./components/Nav/Nav";
import Cards from "./components/Cards/Cards";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import "./App.css";
import Favorites from "./components/Favorites/Favorites";

/*
const API_KEY = "feef1cb7a8f9.aa1bdddc010b6f26cf7f" */

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const [access, setAccess] = useState(false);
  /*   const EMAIL = "dether@gmail.com"
   const PASSWORD = "asdasd123" */
  const navigate = useNavigate();

  const onSearch = async (id) => {
    try {
      const URL_BASE = "http://localhost:3001/rickandmorty";

      /* if (characters.find((char) => char.id === id)) {
        return alert("Personaje repetido");
      } */

      const response = await axios(`${URL_BASE}/character/${id}`);
      const data = response.data;

      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onClose = (id) => {
    // porque filter... no modifica el array orifinal
    setCharacters(characters.filter((character) => character.id !== id));
  };

  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const { data } = await axios.get(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    setAccess(false);
  };

  const ShowNav = location.pathname !== "/";

  useEffect(() => {
    //
    !access && navigate("/"); //
  }, [access]); //

  return (
    <div className="App">
      {ShowNav && <Nav onSearch={onSearch} logout={logout} />}
      <Routes>
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
