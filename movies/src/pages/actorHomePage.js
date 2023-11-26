import React, { useState } from "react";
import { useQuery } from 'react-query';
import PageTemplate from '../components/templateActorListPage';
import Spinner from '../components/spinner';
import { Pagination, Stack } from '@mui/material';
import { getActors } from '../api/tmdb-api';

const ActorHomePage = () => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading, isError } = useQuery(['popular', page], () => getActors(page));

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const actors = data.results;
  const totalPages = data.total_pages;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <PageTemplate
        title="Discover Actors"
        actors={actors}
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

export default ActorHomePage;
