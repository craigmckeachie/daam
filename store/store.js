import { createStore, applyMiddleware } from "redux";
import { reducer } from "./reducers.js";
import middlewares from "./middleware.js";

const initialState = {
  films: [],
  selected_date: new Date(),
  selected_film: {},
  show_film_details: false,
  showings: [
    { id: 1, showing_time: "2018-09-25T22:15:00.000Z" },
    { id: 2, showing_time: "2018-09-26T00:15:00.000Z" },
    { id: 3, showing_time: "2018-09-26T00:15:00.000Z" }
  ],
  tables: []
};
export const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middlewares)
);
