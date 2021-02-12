export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_FILM":
      // return {
      //   ...state,
      //   films: [
      //     ...state.films.filter(f => f.id !== action.film?.id),
      //     action.film
      //   ]
      // };
      return {
        ...state,
        films: [
          ...state.films.filter(f => f.id !== action.film?.id),
          // ...state.films,
          action.film
        ]
      };
    case "SET_SELECTED_DATE":
      return { ...state, selected_date: action.date };
    case "SET_SELECTED_FILM":
      return { ...state, selected_film: action.film };
    case "SHOW_FILM_DETAILS":
      return { ...state, show_film_details: true };
    case "HIDE_FILM_DETAILS":
      return { ...state, show_film_details: false };
    case "SET_SELECTED_SHOWING":
      return { ...state, selected_showing: action.selected_showing };
    case "SET_SHOWINGS":
      return { ...state, showings: action.showings };
    case "SET_TABLES":
      return { ...state, tables: action.tables };
    case "SET_RESERVATIONS":
      return { ...state, reservations: action.reservations };
    default:
      return state;
  }
};
