import React, { useContext, useEffect, useState } from 'react';
import MediaItem from '../MediaItem/MediaItem';
import { MediaContext } from '../Context/MediaContext';

export default function Home() {

  let { movie, setMovie, getData } = useContext(MediaContext)
  useEffect(() => {
    getData("movie", setMovie)
  }, [])
  return (
    <>
      <div className="container">
        {/* movies */}
        <div className="row py-4">
          <div className="col-md-4 d-flex align-items-center">
            <div>
              <div className='bdr w-25 mb-3 '></div>
              <div className="text-white py-3">
                <h2 className='h3'>Trending <br /> Movies <br /> To Watch Now</h2>
                <p className=' pt-3 '>Most watched Movies Watched By Days</p>
              </div>
              <div className='bdr w-100 mt-3'></div>
            </div>
          </div>
          {movie.filter((item) => item.poster_path != null).slice(0, 10).map((item, index) => <MediaItem key={index} item={item} />)}
        </div>
      </div>
    </>
  )
}
