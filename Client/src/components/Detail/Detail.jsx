import axios from "axios"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Detail.css";

/* const API_KEY = "feef1cb7a8f9.aa1bdddc010b6f26cf7f"  */
const Detail = () => {
    

    const { id } = useParams();

    const [character, setCharacter] = useState({});



    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then((response) => response.data)
        .then(( data ) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
        }
    });
    return setCharacter({});
    }, [id]) // si la id cambia, se ejecuta useEffect con la id nueva


    return (
        <div className="detail-container">
        {
            character.name ? (
                <div>
                    <img src={character.image} alt={character.name}></img>
                    <h1>{character.name}</h1> 
                    <p>Specie : {character.species}</p>
                    <p>Gender : {character.gender}</p>
                    <p>Status : {character.status}</p>
                    <p>Origin : {character.origin?.name}</p>
                </div>
                ) : (<h1>Componente no encontrado</h1>)
        }
        </div>
    )
}
export default Detail;

// MAS USADO 1
//character ? <h2>{character.name}</h2> : null

// MAS USADO 2
                /* character && <div>
                    <h2>{character.name}</h2>
                    <h2>{character.status}</h2>
                    <h2>{character.species}</h2>
                </div> */

// FUNCIONA PERO NO RENDERIZA CONDICIONALMENTE CADA PROPIEDAD
/*          <h2>{character.name}</h2> 
            <h2>{character.species}</h2>
            <h2>{character.gender}</h2>
            <h2>{character.status}</h2>
            <h2>{character.origin?.name}</h2>
            <img src={character.image} alt={character.name} /> */