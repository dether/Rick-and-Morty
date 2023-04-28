import { Link } from "react-router-dom";
import './Card.css';
import { addFav, removeFav } from "../../redux/actions"
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";

function Card({ id, name, species, gender, image, onClose, addFav, removeFav, myFavorites }) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    }  else {
      setIsFav(true);
      addFav({id, name, species, gender, image})
    }
  };

  useEffect(() =>{
    myFavorites.forEach((fav) => { // reccorre por cada personaje
      if(fav.id === id) { 
        setIsFav(true) // 
      }
    });
  },[myFavorites, id]);

  return (
    <div className="card-container">
      
      <button onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>

      <Link to={`/detail/${id}`} className="card-link">
        <h3 className="card-name">{name}</h3>
      </Link>

      <img className="card-image" src={image} alt={name} />
      
      <div className="card-text">


      <button className="close-button" onClick={() => onClose(id)}>X</button>
        <p><strong>Species:</strong> {species}</p>
        <p><strong>Gender:</strong> {gender}</p>
      </div>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => { dispatch(addFav(character)) },
    removeFav: (id) => { dispatch(removeFav(id)) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);