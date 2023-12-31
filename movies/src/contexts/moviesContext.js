import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) // Added state for review
  const [mustWatch, setMustWatch] = useState( [] )
  const [numOfPage, setPageNum] = useState( [] )
  const [type, setType] = useState( [] )


  const setPageNumber = (num) => {
    setPageNum(num);
  }

  const setMovieType = (args) => {
    setType(args);
  }


  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
    }
    else{
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites)
  };

  //console.log(myReviews);
  // We will use this function in a later section
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const addReview = (movie, review) => { // Added handler for adding a review
    setMyReviews({ ...myReviews, [movie.id]: review });
  };

  const addToWatchlist = (movie) => {
    let newMustWatch = [];
    if (!mustWatch.includes(movie.id)){
      newMustWatch = [...mustWatch, movie.id];
    }
    else{
      newMustWatch = [...mustWatch];
    }
    setMustWatch(newMustWatch)
  }; 
  console.log(mustWatch);

  const removeFromWatchlist = (movie) => {
    setMustWatch( mustWatch.filter(
      (mId) => mId !== movie.id
    ) )
  };

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        mustWatch,
        addToFavorites,
        removeFromFavorites,
        addReview,
        addToWatchlist,
        removeFromWatchlist,
        numOfPage,
        setPageNumber,
        type,
        setMovieType,

      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};



export default MoviesContextProvider;