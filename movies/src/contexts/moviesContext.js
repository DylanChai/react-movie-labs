import React, { useState, createContext } from "react";

export const MoviesContext = createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState([]);
  const [myReviews, setMyReviews] = useState({});
  const [mustWatch, setMustWatch] = useState([]);

  const addToFavorites = (movie) => {
    const newFavorites = favorites.includes(movie.id) ? [...favorites] : [...favorites, movie.id];
    setFavorites(newFavorites);
  };

  const removeFromFavorites = (movie) => {
    setFavorites(favorites.filter((mId) => mId !== movie.id));
  };

  const addReview = (movie, review) => {
    setMyReviews({ ...myReviews, [movie.id]: review });
  };

  const addToWatchlist = (movie) => {
    const newMustWatch = mustWatch.includes(movie.id) ? [...mustWatch] : [...mustWatch, movie.id];
    setMustWatch(newMustWatch);
  };

  const removeFromWatchlist = (movie) => {
    setMustWatch(mustWatch.filter((mId) => mId !== movie.id));
  };

  // Provide the context value
  return (
    <MoviesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        myReviews,
        addReview,
        mustWatch,
        addToWatchlist,
        removeFromWatchlist,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
