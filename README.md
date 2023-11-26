# Assignment 1 - ReactJS app.

Name: Dylan Chai

## Overview.

Implemented Additional Features to my React Movie Labs

### Features.
 
Pagination
Actors 
Actor Details
Latest 
Trending Movies 
Navy SiteHeader
![image](https://github.com/DylanChai/react-movie-labs/assets/91637804/3242c6e3-6152-48a7-845a-2236b50e3d61)

## Setup requirements.

Installed NPM, also ensured my API Key was functioning correctly in order to call the API'S.

## API endpoints.

[ List the __additional__ TMDB endpoints used, giving the description and pathname for each one.] 

Latest Movies - https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1
Trending - https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_KEY}&page=${page}
Actor Images - https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}
Actor - https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}
Actors - https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&page=${page}
## Routing.
   /movies/watchlist
   /actors
    /actor/:id
      /movies/trending
        /movies/latest
