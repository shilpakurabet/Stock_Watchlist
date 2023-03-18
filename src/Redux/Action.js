/** @format */

import axios from "axios";
import { ADD_STOCK, DELETE_STOCK, GET_ALL_DATA } from "./Constants";

export const getAllData = (query) => {
  return async (dispatch) => {
    try {
      const Api_Key = "W3ZRVWI13FS132QN";
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${query}&apikey=${Api_Key}`
      );
      const result = await response.data;
      dispatch({ type: GET_ALL_DATA, payload: result });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addStock = (data, setShowPopup) => {
  return async (dispatch) => {
    dispatch({ type: ADD_STOCK, payload: data });
    setShowPopup(true);
  };
};

export const deleteStock = (id) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_STOCK, payload: id });
  };
};
