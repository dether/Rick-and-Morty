import axios from "axios";
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions-types";

export const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);
      dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint);
      dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};
//! redux 4.0.5 instalar
