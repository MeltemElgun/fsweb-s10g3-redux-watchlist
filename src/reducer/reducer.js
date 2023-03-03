import { movies } from "./../movies";
import { kaldir, ekle } from "./actions";
const initialState = {
  movies: movies,
  favorites: [],
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case kaldir:
      let newFavMovies = state.favorites.filter(
        (favMovie) => action.payload !== favMovie.id
      );
      let facMovie = state.favorites.find(
        (favMovie) => action.payload == favMovie.id
      );
      state.movies.push(facMovie);
      return {
        ...state,
        favorites: newFavMovies,
      };
    case ekle:
      let newMovie = action.payload;
      console.log(newMovie);
      if (state.favorites.every((movie) => movie.id !== newMovie.id))
        return {
          ...state,
          favorites: [...state.favorites, newMovie],
          movies: [...state.movies.filter((movie) => movie.id !== newMovie.id)],
        };

    default:
      return state;
  }
}
