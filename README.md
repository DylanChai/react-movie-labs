# Assignment 1 - ReactJS app.

Name: Dylan Chai

## Overview.

Implemented Additional Features to my React Movie Labs

### Features.

Pagination

![image](https://github.com/DylanChai/react-movie-labs/assets/91637804/60a55137-39c8-4822-9690-41fbb4e53629)

Actors 
![image](https://github.com/DylanChai/react-movie-labs/assets/91637804/96ba3558-224e-467c-b3c2-4a2de3ab8119)

Actor Details
![image](https://github.com/DylanChai/react-movie-labs/assets/91637804/95d38156-6289-42e9-8eb0-5305a6a1fe51)

Latest 

![image](https://github.com/DylanChai/react-movie-labs/assets/91637804/dee76e1f-8eae-40cb-b7ae-da0e8e7bbbec)

Trending Movies 

![image](https://github.com/DylanChai/react-movie-labs/assets/91637804/9b5165f0-58d3-48d9-aa61-dbd6b8e632ce)

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
