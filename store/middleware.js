import { host } from "./api_host_maker";
const fetchFilmsMiddleware = ({
  dispatch,
  getState
}) => next => async action => {
  if (action.type === "FETCH_FILMS") {
    // console.log(`${host}/api/films`);
    fetch(`${host}/api/films`)
      .then(response => response.json())
      .then(films => {
        films.forEach(film => {
          dispatch({ type: "ADD_FILM", film });
        });
      })
      .catch(e => console.error("Could not fetch films", e));
  }

  next(action);
};

const fetchShowingsForDateMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  // Complete the current action *first* so we have a good film and date!
  next(action);
  if (
    action.type === "SET_SELECTED_DATE" ||
    action.type === "SET_SELECTED_FILM"
  ) {
    const selected_date = getState().selected_date.toISOString().split("T")[0];
    const film_id = getState().selected_film.id;
    fetch(`${host}/api/showings/${film_id}/${selected_date}`)
      .then(res => res.json())
      .then(showings => dispatch({ type: "SET_SHOWINGS", showings }))
      .catch(err => console.error("Couldn't fetch showings", err));
  }
};

const loggingMiddleware = ({ getState }) => next => action => {
  if (getState().logging_enabled) {
    console.log({ action, state: getState() });
  }
  next(action);
};
export default [
  fetchFilmsMiddleware,
  fetchShowingsForDateMiddleware,
  loggingMiddleware
];
