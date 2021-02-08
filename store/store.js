import { createStore, applyMiddleware } from "redux";
import { reducer } from "./reducers.js";
import middlewares from "./middleware.js";

const initialState = {
  films: [],
  selected_date: new Date(),
  selected_film: {},
  show_film_details: false,
  showings: [
    { id: 1, showing_time: new Date() },
    { id: 2, showing_time: new Date() },
    { id: 3, showing_time: new Date() },
    { id: 4, showing_time: new Date() }
  ],
  tables: []
};
export const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middlewares)
);
