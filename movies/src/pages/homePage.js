import React, { useState } from "react";
import { useQuery } from 'react-query';
import PageTemplate from '../components/templateMovieListPage';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
import { Pagination, Stack } from '@mui/material';
import { getMovies } from '../api/tmdb-api';

const HomePage = () => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading, isError } = useQuery(['discover', page], () => getMovies(page));

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data.results;
  const totalPages = data.total_pages;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <PageTemplate
        title="Discover Movies"
        movies={movies}
        action={(movie) => <AddToFavoritesIcon movie={movie} />}
      />
      <Stack spacing={2} justifyContent="center" sx={{ marginTop: 2 }}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handleChangePage}
          color="primary"
        />
      </Stack>
    </>
  );
};

export default HomePage;
