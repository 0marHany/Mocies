import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../Store/Slices/DetalisSlice';

export default function MediaDetails() {
  const { id, media_type } = useParams();
  const dispatch = useDispatch();
  const details = useSelector((state) => state.movie.details);

  useEffect(() => {
    dispatch(getDetails({ media_type, id }));
  }, [dispatch, media_type, id]);

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-4">
          <img src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} className="w-100" alt="" />
        </div>
        <div className="col-md-8">
          <div>
            <h2 className="h4 text-white pt-1">{details.title}</h2>
            <p>{details.tagline}</p>
            <div className="d-flex">
              {details.genres && details.genres.map((genre) => (
                <p key={genre.id} className="bg-info rounded text-white py-1 px-2 mx-2">{genre.name}</p>
              ))}
            </div>
            <p className="my-2">vote: {details.vote_average}</p>
            <p className="my-4">vote count: {details.vote_count}</p>
            <p className="my-4">popularity: {details.popularity}</p>
            <p className="my-4">release date: {details.release_date}</p>
            <p>{details.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
