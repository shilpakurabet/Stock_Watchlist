/** @format */

import { ADD_STOCK, DELETE_STOCK, GET_ALL_DATA } from "./Constants";

const initialState = {
  getAllData: [],
  addStock: [],
  deleteStock: [],
};
export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DATA: {
      return {
        ...state,
        getAllData: action.payload,
      };
    }
    case ADD_STOCK: {
      return {
        ...state,
        addStock: [...state.addStock, action.payload],
      };
    }
    case DELETE_STOCK: {
      return {
        ...state,
        addStock: state.addStock.filter(
          (item) => item["2. name"] !== action.payload
        ),
      };
    }
    default:
      return { ...state };
  }
};
