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
    default:
      return state;
  }
};
