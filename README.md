Assignment 1 - ReactJS App
Name: Dylan Chai

Overview
I have implemented additional features to enhance my React Movie Labs application.

Features
Pagination
Actors
Actor Details
Latest Movies
Trending Movies
Navy Site Header
Image

Setup Requirements
To set up this project, the following requirements were fulfilled:

Installed NPM
Ensured my API Key was functioning correctly in order to make API calls.
API Endpoints
I used the following additional TMDB endpoints in my application, along with their descriptions and pathnames:

Latest Movies

Description: Retrieves the list of the latest movies.
Pathname: https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1
Trending Movies

Description: Retrieves the list of trending movies for the day.
Pathname: https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_KEY}&page=${page}
Actor Images

Description: Fetches images of a specific actor.
Pathname: https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}
Actor Details

Description: Retrieves details of a specific actor.
Pathname: https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}
Actors

Description: Fetches a list of popular actors.
Pathname: https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&page=${page}
Routing
The application has the following routing paths:

/movies/watchlist
/actors
/actor/:id
/movies/trending
/movies/latest
These routes are used to navigate through different sections and functionalities of the React Movie Labs application.
