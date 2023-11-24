import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ActorDetails from "../components/movieDetails/";
import ActorPageTemplate from "../components/templateActorPage";
import { getActor } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const ActorPage = (props) => {
  const { id } = useParams();
  const { data: actor, error, isLoading, isError } = useQuery(
    ["actor", { id: id }],
    getActor
  );

  // Remove this useEffect block since it's redundant
  // useEffect(() => {
  //   getMovie(id).then((movie) => {
  //     setMovie(movie);
  //   });
  // }, [id]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {actor ? (
        <>
          <ActorPageTemplate actor={actor}>
            <ActorDetails actor={actor} />
          </ActorPageTemplate>
        </>
      ) : (
        <p>Waiting for actor details</p>
      )}
    </>
  );
};

export default ActorPage;
