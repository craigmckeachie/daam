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

const loggingMiddleware = ({ getState }) => next => action => {
  if (getState().logging_enabled) {
    console.log({ action, state: getState() });
  }
  next(action);
};
export default [fetchFilmsMiddleware, loggingMiddleware];
