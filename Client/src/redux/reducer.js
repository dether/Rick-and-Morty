import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions-types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: payload,
        allCharacters: payload,
      };

    case REMOVE_FAV:
      return { 
        ...state,
        myFavorites: payload,
        allCharacters: payload,
      };

    case FILTER:
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          (character) => character.gender === payload
        ),
      };

    case ORDER:
      const orderedCharacters = [...state.allCharacters];
      orderedCharacters.sort((a, b) => {
        if (payload === "A") {
          return a.id - b.id;
        } else if (payload === "D") {
          return b.id - a.id;
        } else {
          return 0;
        }
      });
      return {
        ...state,
        myFavorites: orderedCharacters, // actualizar myFavorites
      };

    default:
      return { ...state };
  }
};

export default reducer;
