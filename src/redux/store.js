import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo/todoSlice";


const reducer = {
  //Aquí van todos los reducer de la aplicación
    todo: todoReducer
};

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
});
export default store;
