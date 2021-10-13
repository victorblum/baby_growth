// Приложение должно быть доступно для использования на мобильных устройствах.

import { flushSync } from "react-dom";

const initialState = {
    filters: []
}

function reducer (state = initialState, action) {
    // switch(action.type) {
    //     case 'SHOW_MOVIES':
    //         return {...state,movies: [...action.payload.movieList]};
    //     case 'ADD_MOVIES':
    //         const favourite = action.payload.myFavouriteMovies;
    //         const findFavorite = state.favouriteMovies.find((item) => item.imdbID === favourite.imdbID);
    //         if(!findFavorite) {
    //             const favouriteMovies = [...state.favouriteMovies, favourite];
    //             return {...state,favouriteMovies};
    //         }
    //         return state;
    //     case 'DELETE_MOVIES':
    //         const findId = [...state.favouriteMovies.filter((item)=> item.imdbID !== action.payload.imdbID)];
    //         return {...state,favouriteMovies: findId};
    //     default:
    //       return state;
    //   }
}

export default reducer;