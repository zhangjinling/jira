import React from 'react'
const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";
const Movie = ( movie: any ) => {
 
  const poster = movie.movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.movie.Poster;
  return (
    <div className='movie'>
      <h2>{movie.movie.Title}</h2>
      <div>
        <img
          width='200' 
          src={poster}
          alt={`this movie titled:${movie.movie.Title}`} 
        />
      </div>
      <p>({movie.movie.Year})</p>
    </div>
  )
}
export default Movie