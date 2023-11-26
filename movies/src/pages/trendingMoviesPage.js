import React, { useState } from "react";
import { useQuery } from 'react-query';
import PageTemplate from '../components/templateMovieListPage';
import Spinner from '../components/spinner';
import { Pagination, Stack } from '@mui/material';
import { getTrending } from '../api/tmdb-api';
import AddToPlaylistIcon from '../components/cardIcons/addToWatchList';

const TrendingMoviesPage = () => {
    const [page, setPage] = useState(1);
    const { data, error, isLoading, isError } = useQuery(['trending', page], () => getTrending(page));

    if (isLoading) return <Spinner />;
    if (isError) return <h1>{error.message}</h1>;

    const movies = data.results;
    const totalPages = data.total_pages;

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    return (
        <>
          <PageTemplate
              title="Trending Movies"
              movies={movies}
              action={(movie) => <AddToPlaylistIcon movie={movie} />}
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

export default TrendingMoviesPage;
